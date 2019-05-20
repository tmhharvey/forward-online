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

// React DateRangePicker
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

//Dimensions
import Select from "react-select";
import "react-select/dist/react-select.min.css";
import dimensionData from "./data/dimensions";

import * as Yup from "yup";
import "./TrafficSourceReport.scss";

const dimensionOptions = dimensionData.options;
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

class TrafficSourceReport extends React.Component {
  state = {
    productTableData: [],
    value: [""]
  };

  componentDidMount = async () => {
    // call the /Security/GetToken with creds to get a JWT
    // const response = await axios.get(
    //  "/Security/GetToken"
    // );
    // const reportData = await axios.get(
    //  "<API CALL HERE>"
    // );
    //GROUP CATEGORY BY DATES
    // /api/reporting/v0.1/ProductPerformanceReport/#/definitions/group_by_channel_and_day_of_week
    //SORTING OPTIONS
    // #/definitions/Summary_ProductPerformance_Report_SortOptions
    //AVAILABLE DATA RETURNED BY SORTING
    // {
    //     brand,
    //     sessions,
    //     users,
    //     total_units,
    //     orders,
    //     ecomm_revenue,
    //     conversion_rate;
    // }
    // EXAMPLE API CALL??
    // /api/reporting/v0.1/ProductPerformanceReport/#/definitions/group_by_channel_and_day_of_week/#/definitions/Summary_ProductPerformance_Report_SortOptions
    //API CALL 2: Web Events Detail Report
    // /api/reporting/v0.1/WebEventsDetailReport/GetReportResults
    //AVAILABLE DATA RETURNED BY SORTING
    // {
    //    bounceRate: "29%",
    //     pagesPerSession: "3.2",
    //     averageSessionDuration: "5 minutes",
    //     conversionRate: "16%",
    // }
    // EXAMPLE API CALL??
    // /api/reporting/v0.1/WebEventsDetailReport/GetReportResults/#/definitions/WebEvents_Permutations

    productTestData = [
      {
        trafficSource: "Source 1",
        users: "313,450",
        sessions: "278,423",
        bounceRate: "29%",
        pagesPerSession: "4.2",
        averageSessionDuration: "6 minutes",
        conversionRate: "16%",
        orders: "36,581",
        totalUnitsSold: "19,342",
        averageOrderValue: "$19.99",
        totalRevenue: "$186,746"
      },
      {
        trafficSource: "Source 2",
        users: "413,450",
        sessions: "188,423",
        bounceRate: "29%",
        pagesPerSession: "3.2",
        averageSessionDuration: "5 minutes",
        conversionRate: "16%",
        orders: "24,581",
        totalUnitsSold: "22,342",
        averageOrderValue: "$19.99",
        totalRevenue: "$146,746"
      }
    ];

    this.setState({
      productTableData: productTestData
    });
  };

  dimensionHandler = async () => {
    var dimensionValue = [...this.state.value];
    var updatedDimensionValue;
    var finalDimensionValue = [];
    if (dimensionValue[0]) {
      var updatedDimensionValue = await dimensionValue.map(dimension => {
        if (dimension.value === "Device") {
          return [
            {
              dimension: "Smart Phone",
              trafficSource: "Source 1",
              users: "113,450",
              sessions: "78,423",
              bounceRate: "29%",
              pagesPerSession: "3.2",
              averageSessionDuration: "5 minutes",
              conversionRate: "16%",
              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Tablet",
              trafficSource: "Source 1",
              users: "113,450",
              sessions: "78,423",
              bounceRate: "16%",
              pagesPerSession: "2.8",
              averageSessionDuration: "7 minutes",
              conversionRate: "19%",
              orders: "12,581",
              totalUnitsSold: "2,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$36,746"
            },
            {
              dimension: "Desktop",
              trafficSource: "Source 1",
              users: "113,450",
              sessions: "78,423",
              bounceRate: "16%",
              pagesPerSession: "2.8",
              averageSessionDuration: "7 minutes",
              conversionRate: "19%",
              orders: "3,581",
              totalUnitsSold: "6,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$86,746"
            },
            {
              dimension: "Smart Phone",
              trafficSource: "Source 2",
              users: "113,450",
              sessions: "78,423",
              bounceRate: "29%",
              pagesPerSession: "3.2",
              averageSessionDuration: "5 minutes",
              conversionRate: "16%",
              orders: "5,581",
              totalUnitsSold: "8,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$42,746"
            },
            {
              dimension: "Tablet",
              trafficSource: "Source 2",
              users: "113,450",
              sessions: "78,423",
              bounceRate: "16%",
              pagesPerSession: "2.8",
              averageSessionDuration: "7 minutes",
              conversionRate: "19%",
              orders: "4,581",
              totalUnitsSold: "7,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$58,746"
            },
            {
              dimension: "Desktop",
              trafficSource: "Source 2",
              users: "113,450",
              sessions: "78,423",
              bounceRate: "16%",
              pagesPerSession: "2.8",
              averageSessionDuration: "7 minutes",
              conversionRate: "19%",
              orders: "12,581",
              totalUnitsSold: "9,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$86,746"
            }
          ];
        } else if (dimension.value === "State") {
          return [
            {
              trafficSource: "Source 1",
              dimension: "Colorado",
              users: "113,450",
              sessions: "78,423",
              bounceRate: "29%",
              pagesPerSession: "3.2",
              averageSessionDuration: "5 minutes",
              conversionRate: "16%",
              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            }
          ];
        }
      });

      finalDimensionValue = updatedDimensionValue[0];
      console.log("=== final Dimension Final ===");
      console.log(finalDimensionValue);

      this.setState({
        productTableData: finalDimensionValue
      });
    } else {
      updatedDimensionValue = [
        {
          trafficSource: "Source 1",
          users: "313,450",
          sessions: "278,423",
          bounceRate: "29%",
          pagesPerSession: "4.2",
          averageSessionDuration: "6 minutes",
          conversionRate: "16%",
          orders: "36,581",
          totalUnitsSold: "19,342",
          averageOrderValue: "$19.99",
          totalRevenue: "$186,746"
        },
        {
          trafficSource: "Source 2",
          users: "413,450",
          sessions: "188,423",
          bounceRate: "29%",
          pagesPerSession: "3.2",
          averageSessionDuration: "5 minutes",
          conversionRate: "16%",
          orders: "24,581",
          totalUnitsSold: "22,342",
          averageOrderValue: "$19.99",
          totalRevenue: "$146,746"
        }
      ];
      console.log(updatedDimensionValue);
      this.setState({
        productTableData: updatedDimensionValue
      });
    }
  };

  dateChangeHandler = e => {
    e.preventDefault();

    console.log(this.state.startDate._d);
    console.log(this.state.endDate._d);
  };

  saveChanges = value => {
    console.log("==== current state value ====");
    console.log(this.state.value);
    var resetValue = value;
    if (value.length > 1) {
      resetValue.shift();
      console.log(resetValue);
    }
    this.setState(
      {
        value: resetValue
      },
      () => {
        console.log("==== Should be 1 value ====");
        console.log(this.state.value);
        this.dimensionHandler();
      }
    );
  };

  render() {
    var renderedReportTable = "";
    var productData = this.state.productTableData;
    renderedReportTable = productData.map(product => {
      return (
        <tr>
          <td>{product.trafficSource}</td>
          {this.state.value[0] ? <td>{product.dimension}</td> : null}
          <td>{product.users}</td>
          <td>{product.sessions}</td>
          <td>{product.bounceRate}</td>
          <td>{product.pagesPerSession}</td>
          <td>{product.averageSessionDuration}</td>
          <td>{product.conversionRate}</td>
          <td>{product.orders}</td>
          <td>{product.totalUnitsSold}</td>
          <td>{product.averageOrderValue}</td>
          <td>
            <strong className="text-success">{product.totalRevenue}</strong>
          </td>
        </tr>
      );
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
                Chart Data
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
                <p>
                  <i className="icon-wrench mr-2" />
                  <strong>Secondary Dimensions:</strong>
                </p>

                <Select
                  name="form-field-name2"
                  value={this.state.value}
                  options={dimensionOptions}
                  onChange={this.saveChanges}
                  multi
                  className="mb-4"
                />
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Traffic Source</th>
                      {this.state.value[0] ? <th>Dimension</th> : null}
                      <th>Users</th>
                      <th>Sessions</th>
                      <th>Bounce Rate</th>
                      <th>Pages Per Session</th>
                      <th>Avg. Session Duration</th>
                      <th>Conversion Rate</th>
                      <th>Orders</th>
                      <th>Total Units Sold</th>
                      <th>Average Order Value</th>
                      <th>Total Revenue</th>
                    </tr>
                  </thead>
                  <tbody>{renderedReportTable}</tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TrafficSourceReport;
