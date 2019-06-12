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
import "./BrandReport.scss";

const dimensionOptions = tableOptions.dimensions;
const displayOptions = tableOptions.displayOptions;
var productTestData = [];

const line = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
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
      data: [
        6500,
        5900,
        8000,
        8100,
        5600,
        5500,
        4000,
        4400,
        4800,
        5600,
        6100,
        6200
      ]
    },
    {
      label: "Total Orders",
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
      data: [
        3500,
        4200,
        6400,
        6700,
        2100,
        5500,
        4800,
        4600,
        4200,
        4100,
        3500,
        3100
      ]
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

var columns = [];

const initialValues = {
  accept: false
};

var auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRGVtb0NsaWVudEJldGEiLCJGb3J3YXJkQ2xpZW50UGxhdGZvcm1BcGlLZXkiOiJCZXRhMjM0NUAjJCUiLCJleHAiOjE1NjAxOTc3MjAsImlzcyI6ImZvcndhcmQub25saW5lIiwiYXVkIjoiZm9yd2FyZC5vbmxpbmUifQ.UFGvjdFGTahET6DN4D9VvCaVsYKPaFWiHfW0Gs_uEig";

class BrandReport extends React.Component {
  state = {
    productTestDataHeader: [],
    productTableDataBody: [],
    fromDate: "",
    toDate: "",
    dimension: [""],
    displayOptions: {
      users: true
    },
    BrandReportData: columns,
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

  lineChartHandler = (fromDate, toDate, timeCycle) => {
    //get the dates and parse them into an array grouped by the selected time-period.
    // get the data for sessions and orders for those months
    // aggregate the sessions and orders data by the time-period in which they were in
    //render a graph with the appropriate data
  };

  apiReportHandler = async () => {
    var productTestDataHeader = "";
    var productTestDataBody = "";
    const headers = {
      Authorization: auth
    };
    columns = [
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

    console.log("API report fired----");
    //Default API call with no Second Dimension
    // if (!this.state.dateRange) {
    //   var apiResults = await axios.get(
    //     "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_brand&sortOption=brand",
    //     { headers }
    //   );

    //   console.log(apiResults.data.elasticResult.resultsTable.source);
    //   var sourceData = apiResults.data.elasticResult.resultsTable.source;
    //   productTestDataHeader = sourceData.columns;
    //   productTestDataBody = sourceData.rows;

    //   this.setState(
    //     {
    //       productTestDataHeader: productTestDataHeader,
    //       productTableDataBody: productTestDataBody
    //     },
    //     () => {}
    //   );
    // } else {
    //   var apiResults = await axios.get(
    //     `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
    //       this.state.fromDate
    //     }&toDate=${
    //       this.state.toDate
    //     }&permutation=group_by_brand&sortOption=brand`,
    //     { headers }
    //   );

    //   console.log(apiResults.data.elasticResult.resultsTable.source);
    //   var sourceData = apiResults.data.elasticResult.resultsTable.source;
    //   productTestDataHeader = sourceData.columns;
    //   productTestDataBody = sourceData.rows;

    //   this.setState(
    //     {
    //       productTestDataHeader: productTestDataHeader,
    //       productTableDataBody: productTestDataBody
    //     },
    //     () => {}
    //   );
    // }
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

  dimensionHandler = async () => {
    if (this.state.dimension) {
      var dimensionValue = [...this.state.dimension];
      var productTestDataHeader = "";
      var productTestDataBody = "";
      const headers = {
        Authorization: auth
      };

      if (dimensionValue[0].value === "Day of Week") {
        console.log("Day of week dimension change fired");
        columns = [
          {
            value: "Brand",
            elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
          },
          {
            value: "Day of Week",
            elements: (index, row) => <div>{!row[1] ? "n/a" : row[1]}</div>
          },
          {
            value: "Sessions",
            elements: (index, row) => <div>{!row[2] ? "n/a" : row[2]}</div>
          },
          {
            value: "Users",
            elements: (index, row) => <div>{!row[3] ? "n/a" : row[3]}</div>
          },
          {
            value: "Total Units",
            elements: (index, row) => <div>{!row[4] ? "n/a" : row[4]}</div>
          },
          {
            value: "Orders",
            elements: (index, row) => <div>{!row[5] ? "n/a" : row[5]}</div>
          },
          {
            value: "eComm Revenue",
            elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
          },
          {
            value: "Conversion Rate",
            elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
          },
          {
            value: "Avg Order Value",
            elements: (index, row) => <div>{!row[8] ? "n/a" : row[7]}</div>
          }
        ];
        if (!this.state.dateRange) {
          console.log("Day of week dimension change fired WITHOUT a DATE");
          // var apiResults = await axios.get(
          //   "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_brand_and_day_of_week&sortOption=brand",
          //   { headers }
          // );
          // console.log(apiResults.data.elasticResult.resultsTable.source);
          // var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          // productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader
            // productTableDataBody: productTestDataBody
          });
        } else {
          console.log("dimension Day of Week with a date range");
          // var apiResults = await axios.get(
          //   `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
          //     this.state.fromDate
          //   }&toDate=${
          //     this.state.toDate
          //   }&permutation=group_by_brand_and_day_of_week&sortOption=brand`,
          //   { headers }
          // );
          // console.log(apiResults.data.elasticResult.resultsTable.source);
          // var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          // productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader
            // productTableDataBody: productTestDataBody
          });
        }
      } else if (dimensionValue[0].value === "Country/Region") {
        console.log("API DIMENSION Country/Region report fired----");
        columns = [
          {
            value: "Brand",
            elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
          },
          {
            value: "Country/Region",
            elements: (index, row) => <div>{!row[1] ? "n/a" : row[1]}</div>
          },
          {
            value: "Sessions",
            elements: (index, row) => <div>{!row[2] ? "n/a" : row[2]}</div>
          },
          {
            value: "Users",
            elements: (index, row) => <div>{!row[3] ? "n/a" : row[3]}</div>
          },
          {
            value: "Total Units",
            elements: (index, row) => <div>{!row[4] ? "n/a" : row[4]}</div>
          },
          {
            value: "Orders",
            elements: (index, row) => <div>{!row[5] ? "n/a" : row[5]}</div>
          },
          {
            value: "eComm Revenue",
            elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
          },
          {
            value: "Conversion Rate",
            elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
          },
          {
            value: "Avg Order Value",
            elements: (index, row) => <div>{!row[8] ? "n/a" : row[7]}</div>
          }
        ];
        // if (!this.state.dateRange) {
        //   var apiResults = await axios.get(
        //     "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_brand_and_country_region&sortOption=brand",
        //     { headers }
        //   );
        //   console.log(apiResults.data.elasticResult.resultsTable.source);
        //   var sourceData = apiResults.data.elasticResult.resultsTable.source;
        //   productTestDataHeader = sourceData.columns;
        //   productTestDataBody = sourceData.rows;
        //   this.setState({
        //     productTestDataHeader: productTestDataHeader,
        //     productTableDataBody: productTestDataBody
        //   });
        // } else {
        //   var apiResults = await axios.get(
        //     `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
        //       this.state.fromDate
        //     }&toDate=${
        //       this.state.toDate
        //     }&permutation=group_by_brand_and_country_region&sortOption=brand`,
        //     { headers }
        //   );
        //   console.log(apiResults.data.elasticResult.resultsTable.source);
        //   var sourceData = apiResults.data.elasticResult.resultsTable.source;
        productTestDataHeader = columns;
        //   productTestDataBody = sourceData.rows;
        this.setState({
          productTestDataHeader: productTestDataHeader
          // productTableDataBody: productTestDataBody
        });
        // }
      } else if (dimensionValue[0].value === "Hour") {
        console.log("HOUR dimension change fired");
        columns = [
          {
            value: "Brand",
            elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
          },
          {
            value: "Hour of Day",
            elements: (index, row) => <div>{!row[1] ? "n/a" : row[1]}</div>
          },
          {
            value: "Sessions",
            elements: (index, row) => <div>{!row[2] ? "n/a" : row[2]}</div>
          },
          {
            value: "Users",
            elements: (index, row) => <div>{!row[3] ? "n/a" : row[3]}</div>
          },
          {
            value: "Total Units",
            elements: (index, row) => <div>{!row[4] ? "n/a" : row[4]}</div>
          },
          {
            value: "Orders",
            elements: (index, row) => <div>{!row[5] ? "n/a" : row[5]}</div>
          },
          {
            value: "eComm Revenue",
            elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
          },
          {
            value: "Conversion Rate",
            elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
          },
          {
            value: "Avg Order Value",
            elements: (index, row) => <div>{!row[8] ? "n/a" : row[7]}</div>
          }
        ];
        if (!this.state.dateRange) {
          console.log("HOUR dimension change fired WITHOUT a date");
          // var apiResults = await axios.get(
          //   "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_brand_and_hour_of_day&sortOption=brand",
          //   { headers }
          // );
          // console.log(apiResults.data.elasticResult.resultsTable.source);
          // var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          // productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader
            // productTableDataBody: productTestDataBody
          });
        } else {
          console.log("HOUR dimension change fired WITH a date");
          // var apiResults = await axios.get(
          //   `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
          //     this.state.fromDate
          //   }&toDate=${
          //     this.state.toDate
          //   }&permutation=group_by_brand_and_hour_of_day&sortOption=brand`,
          //   { headers }
          // );
          // console.log(apiResults.data.elasticResult.resultsTable.source);
          // var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          // productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader
            // productTableDataBody: productTestDataBody
          });
        }
      }
    } else {
      this.apiReportHandler();
    }
  };

  saveDimensionChanges = dimension => {
    var resetValue = dimension;
    console.log("dimension state changing...");

    if (dimension.length > 1) {
      resetValue.shift();
    }

    if (dimension.length < 1) {
      resetValue = false;
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
                      onChange={this.saveDimensionChanges}
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
                  pageSize={20}
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

export default BrandReport;
