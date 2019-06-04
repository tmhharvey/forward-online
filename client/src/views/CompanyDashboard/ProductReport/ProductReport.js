import React, { Component, lazy } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  CustomInput,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Row,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table
} from "reactstrap";
import { Bar, Line } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import CustomTable from "../../UI/CustomTable/CustomTable";

// React DateRangePicker
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import Moment from "react-moment";
import moment from "moment";

//Dimensions
import Select from "react-select";
import "react-select/dist/react-select.min.css";
import tableOptions from "./data/dimensions";

//Pagination
// import ReactDOM from "react-dom";
// import Pagination from "react-js-pagination";

import axios from "axios";
import * as Yup from "yup";
import "./ProductReport.scss";

const dimensionOptions = tableOptions.dimensions;
const displayOptions = tableOptions.displayOptions;
var productTestData = [];

const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sessions",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgb(32,168,216, 0.4)",
      borderColor: "rgb(32,168,216)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(32,168,216)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(32,168,216)",
      pointHoverBorderColor: "rgb(32,168,216)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Transactions",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgb(77,189,116, 0.4)",
      borderColor: "rgb(77,189,116)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(77,189,116)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(77,189,116)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [35, 42, 64, 67, 21, 55, 48]
    }
  ]
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false
};

const columns = [
  {
    value: "Brand",
    elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
  },
  {
    value: "Sessions",
    elements: (index, row) => <div>{!row[1] ? "n/a" : row[1]}</div>
  },
  {
    value: "Users",
    elements: (index, row) => <div>{!row[2] ? "n/a" : row[2]}</div>
  },
  {
    value: "Total Units",
    elements: (index, row) => <div>{!row[3] ? "n/a" : row[3]}</div>
  },
  {
    value: "Orders",
    elements: (index, row) => <div>{!row[4] ? "n/a" : row[4]}</div>
  },
  {
    value: "eComm Revenue",
    elements: (index, row) => <div>{!row[5] ? "n/a" : row[5]}</div>
  },
  {
    value: "Conversion Rate",
    elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
  },
  {
    value: "Avg Order Value",
    elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
  }
];

const initialValues = {
  accept: false
};

class ProductReport extends React.Component {
  state = {
    productTestDataHeader: [],
    productTableDataBody: [],
    fromDate: "",
    toDate: "",
    dimension: [""],
    displayOptions: {
      users: true
    },
    productReportData: columns,
    dateRange: false
  };

  // handleDisplayChange = event => {
  //   var target = event.target;
  //   var name = target.name;
  //   var currentCheck = { ...this.state.displayOptions.users };
  //   var newCheck = !currentCheck;

  //   console.log("NEW target checked: " + newCheck);

  //   this.setState(
  //     {
  //       displayOptions: {
  //         [name]: newCheck
  //       }
  //     },
  //     () => {
  //       console.log(this.state.displayOptions);
  //     }
  //   );
  // };
  componentDidMount = () => {
    this.apiReportHandler();
  };

  apiReportHandler = async () => {
    var productTestDataHeader = "";
    var productTestDataBody = "";
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRGVtb0NsaWVudEJldGEiLCJGb3J3YXJkQ2xpZW50UGxhdGZvcm1BcGlLZXkiOiJCZXRhMjM0NUAjJCUiLCJleHAiOjE1NTk2MTQzNDYsImlzcyI6ImZvcndhcmQub25saW5lIiwiYXVkIjoiZm9yd2FyZC5vbmxpbmUifQ.FIl9tFUhTtB6hN2b-TU25pGBtva-BYVFD9u9IsadAFQ"
    };

    //Default API call with no Second Dimension
    if (!this.state.dateRange) {
      var apiResults = await axios.get(
        "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_brand&sortOption=brand",
        { headers }
      );

      console.log(apiResults.data.elasticResult.resultsTable.source);
      var sourceData = apiResults.data.elasticResult.resultsTable.source;
      productTestDataHeader = sourceData.columns;
      productTestDataBody = sourceData.rows;

      this.setState(
        {
          productTestDataHeader: productTestDataHeader,
          productTableDataBody: productTestDataBody
        },
        () => {}
      );
    } else {
      var apiResults = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
          this.state.fromDate
        }&toDate=${
          this.state.toDate
        }&permutation=group_by_brand&sortOption=brand`,
        { headers }
      );

      console.log(apiResults.data.elasticResult.resultsTable.source);
      var sourceData = apiResults.data.elasticResult.resultsTable.source;
      productTestDataHeader = sourceData.columns;
      productTestDataBody = sourceData.rows;

      this.setState(
        {
          productTestDataHeader: productTestDataHeader,
          productTableDataBody: productTestDataBody
        },
        () => {}
      );
    }
  };

  dateChangeHandler = async e => {
    e.preventDefault();

    var fromDate = moment(this.state.startDate._d, "MM/DD/YYYY").format("L");
    var toDate = moment(this.state.startDate._d, "MM/DD/YYYY").format("L");

    console.log(fromDate);
    console.log(toDate);

    this.setState(
      {
        fromDate: fromDate,
        toDate: toDate,
        dateRange: true
      },
      () => {
        this.apiReportHandler();
        console.log(this.state);
      }
    );
  };

  // dimensionHandler = async () => {
  //   var dimensionValue = [...this.state.dimension];
  //   var updatedDimensionValue;
  //   var finalDimensionValue = [];
  //   if (dimensionValue[0]) {
  //     var updatedDimensionValue = await dimensionValue.map(dimension => {
  //       if (dimension.value === "Device") {
  //         //====  check if there is a specified date range
  //         // if (this.state.datRange) {
  //         //   var fromDate = this.state.startDate._d;
  //         //   var toDate = this.state.endDate._d;

  //         //==== clean up the date data so that the API call can use it
  //         //        const response = await axios.get(
  //         //          "api/reporting/v0.1/ProductPerformanceReport/GetReportResults?aggregationFormat=Flattened&permutation=group_by_channel_and_day_of_week&sortOption=users&sortOrientation=Asc"
  //         //         );
  //         // } else {

  //         //==== DEVICE normal Dimension API call
  //         // const response = await axios.get(
  //         //  "api/reporting/v0.1/ProductPerformanceReport/GetReportResults?aggregationFormat=Flattened&permutation=group_by_channel&sortOption=users&sortOrientation=Asc"
  //         // );
  //         return [
  //           {
  //             dimension: "Desktop",
  //             name: "T-shirt Lannister Red",
  //             users: "113,450",
  //             sessions: "78,423",

  //             orders: "12,581",
  //             totalUnitsSold: "9,342",
  //             averageOrderValue: "$19.99",
  //             totalRevenue: "$86,746"
  //           }
  //         ];
  //       } else if (dimension.value === "State") {
  //         return [
  //           {
  //             dimension: "Florida",
  //             name: "T-shirt Lannister Red",
  //             users: "113,450",
  //             sessions: "78,423",

  //             orders: "12,581",
  //             totalUnitsSold: "5,342",
  //             averageOrderValue: "$19.99",
  //             totalRevenue: "$76,746"
  //           }
  //         ];
  //       } else if (dimension.value === "Hour") {
  //         return [
  //           {
  //             dimension: "14:00",
  //             name: "T-shirt Lannister Red",
  //             users: "113,450",
  //             sessions: "78,423",

  //             orders: "12,581",
  //             totalUnitsSold: "5,342",
  //             averageOrderValue: "$19.99",
  //             totalRevenue: "$76,746"
  //           }
  //         ];
  //       } else if (dimension.value === "Day of Week") {
  //         return [
  //           {
  //             dimension: "Wednesday",
  //             name: "T-shirt Lannister Red",
  //             users: "113,450",
  //             sessions: "78,423",

  //             orders: "12,581",
  //             totalUnitsSold: "5,342",
  //             averageOrderValue: "$19.99",
  //             totalRevenue: "$76,746"
  //           }
  //         ];
  //       }
  //     });

  //     finalDimensionValue = updatedDimensionValue[0];
  //     console.log("=== final Dimension Final ===");
  //     console.log(finalDimensionValue);

  //     this.setState({
  //       productTableData: finalDimensionValue
  //     });
  //   } else {
  //     updatedDimensionValue = [
  //       {
  //         name: "T-shirt Stark Grey",
  //         users: "313,450",
  //         sessions: "278,423",

  //         orders: "36,581",
  //         totalUnitsSold: "19,342",
  //         averageOrderValue: "$19.99",
  //         totalRevenue: "$186,746"
  //       },
  //       {
  //         name: "T-shirt Stark Grey",
  //         users: "413,450",
  //         sessions: "188,423",

  //         orders: "24,581",
  //         totalUnitsSold: "22,342",
  //         averageOrderValue: "$19.99",
  //         totalRevenue: "$146,746"
  //       }
  //     ];
  //     console.log(updatedDimensionValue);
  //     this.setState({
  //       productTableData: updatedDimensionValue,
  //       dateRange: false
  //     });
  //   }
  // };

  saveChanges = dimension => {
    var resetValue = dimension;
    if (dimension.length > 1) {
      resetValue.shift();
    }
    this.setState(
      {
        dimension: resetValue
      },
      () => {
        this.dimensionHandler();
      }
    );
  };

  falseFunc = () => false;
  render() {
    var renderedReportTableHeader = "";
    var renderedReportTableBody = "";
    var productDataHeader = this.state.productTestDataHeader;
    var productData = this.state.productTableDataBody;

    renderedReportTableHeader = productDataHeader.map(header => {
      return <th>{header.name}</th>;
    });

    renderedReportTableBody = productData.map(product => {
      var productArray = product;
      var productRows = productArray.map(data => {
        return <td>{data}</td>;
      });

      return <tr>{productRows}</tr>;
    });

    return (
      <div>
        <Row>
          <Col lg="5">
            <Card>
              {/* <CardHeader>
                <i className="icon-calendar" />
                <strong>Report Date Range</strong>{" "}
                <div className="card-header-actions" />
              </CardHeader> */}
              <CardBody>
                <DateRangePicker
                  startDate={this.state.startDate}
                  startDateId="startDate"
                  endDate={this.state.endDate}
                  endDateId="endDate"
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  }
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  }
                  orientation={this.state.orientation}
                  openDirection={this.state.openDirection}
                  isOutsideRange={this.falseFunc}
                />
                <Button
                  type="button"
                  color="success"
                  className="ml-4 mt-1"
                  onClick={e => this.dateChangeHandler(e)}
                >
                  Update
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                Line Chart
                <div className="card-header-actions" />
              </CardHeader>

              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                Table Data
              </CardHeader>

              <CardBody>
                <Row>
                  <Col sm="12" lg="3">
                    <p>
                      <i className="icon-wrench mr-2" />
                      <strong>Secondary Dimensions:</strong>
                    </p>

                    <Select
                      name="form-field-name2"
                      value={this.state.dimension}
                      options={dimensionOptions}
                      onChange={this.saveChanges}
                      multi
                      className="mb-4"
                    />
                  </Col>
                  {/* <Col sm="12" lg="3">
                    <p>
                      <i className="icon-wrench mr-2" />
                      <strong>Display Options:</strong>
                    </p>
                    <FormGroup>
                      <CustomInput
                        type="checkbox"
                        id="users"
                        label="users"
                        name="users"
                        onChange={this.handleDisplayChange}
                        checked={this.state.displayOptions.users}
                      />
                    </FormGroup>
                  </Col> */}
                </Row>
                <CustomTable
                  tableData={this.state.productTableDataBody}
                  columns={columns}
                  hasPagination
                  hasSort
                  originalSize={this.state.productTableDataBody.length}
                  pageSize={5}
                >
                  {this.props.children}
                </CustomTable>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
  i;
}

export default ProductReport;
