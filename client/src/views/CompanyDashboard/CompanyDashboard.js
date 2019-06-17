import React, { Component, lazy } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  ButtonGroup,
  Table
} from "reactstrap";
import { Bar, Line } from "react-chartjs-2";
import * as Yup from "yup";
import "./CompanyDashboard.scss";
import GoogleMaps from "../UI/GoogleMaps/GoogleMaps";
import axios from "axios";
import apiAuth from "./apiAuth";

import CustomTable from "../UI/CustomTable/CustomTable";

// React DateRangePicker
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// import Moment from "react-moment";
import moment from "moment";

//Dimensions
import Select from "react-select";
import "react-select/dist/react-select.min.css";
import tableOptions from "./dashboardData/dimensions";

//Charts
import ReportBarChart from "../UI/ReportBarChart/ReportBarChart";

const Widget03 = lazy(() => import("../UI/Widgets/Widget03"));
const dimensionOptions = tableOptions.dimensions;

// Card Chart 1
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [40, 12, 34, 45, 80, 81, 78]
    }
  ]
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 2
const cardChartData2 = {
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
    "December",
    "January",
    "February",
    "March",
    "April"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [98, 18, 72, 54, 68, 32, 89, 34, 75, 40, 12, 34, 45, 80, 81, 78]
    }
  ]
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

// Card Chart 3
const cardChartData3 = {
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
    "December",
    "January",
    "February",
    "March",
    "April"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ]
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

// Card Chart 4
const cardChartData4 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [45, 67, 55, 69, 34, 74, 93]
    }
  ]
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

var auth = "Bearer " + apiAuth.auth;

var columns = [];

class CompanyDashboard extends React.Component {
  state = {
    productTestDataHeader: [],
    productTableDataBody: [],
    fromDate: "",
    toDate: "",
    dimension: [""],
    displayOptions: {
      users: true
    },
    productReportData: "", //columns
    dateRange: false,
    totalSessions: null,
    totalUnique: null,
    totalOrders: null,
    totalSales: null,
    chartSessionData: [],
    labelData: []
  };

  componentDidMount = () => {
    this.apiReportHandler();
  };

  apiReportHandler = async () => {
    var productTestDataHeader = "";
    var productTestDataBody = "";
    const headers = {
      Authorization: auth
    };
    columns = [
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
    // Default API call with no Second Dimension
    if (!this.state.dateRange) {
      console.log("no date range API call firing");
      var apiResults = await axios.get(
        "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_brand&sortOption=brand",
        { headers }
      );

      // var countryApiResults = await axios.get(
      //   "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_product_sku_and_country_region&sortOption=sessions&sortOrientation=Desc",
      //   { headers }
      // );
      // console.log("Country API results");
      // console.log(countryApiResults);

      // var orderTotalSummary = await axios.get(
      //   "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/OrderTotalSummaryReport/GetReportResults",
      //   { headers }
      // );

      if (apiResults.data.hasResults) {
        console.log("API Results Data");
        console.log(apiResults);

        var sourceData = apiResults.data.elasticResult.resultsTable.source;

        productTestDataHeader = sourceData.columns;
        productTestDataBody = sourceData.rows;

        this.setState(
          {
            productTestDataHeader: productTestDataHeader,
            productTableDataBody: productTestDataBody
          },
          () => {
            this.aggregateHandler(productTestDataBody);
            this.chartDataHandler(productTestDataBody);
          }
        );
      } else {
        console.log("The API came back with No Results");
      }

      // if (countryBreakdownResults.data.hasResults) {
      //   console.log("Country Results Data");
      //   console.log(countryBreakdownResults);
      //   var sourceData = apiResults.data.elasticResult.resultsTable.source;
      // } else {
      //   console.log("The API came back with No Results");
      // }
    } else {
      console.log("date range indentified...");
      var apiResults = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
          this.state.fromDate
        }&toDate=${
          this.state.toDate
        }&permutation=group_by_brand&sortOption=brand`,
        { headers }
      );

      // var countryApiResults = await axios.get(
      //   `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
      //     this.state.fromDate
      //   }&toDate=${
      //     this.state.toDate
      //   }&permutation=group_by_product_sku_and_country_region&sortOption=sessions&sortOrientation=Desc`,
      //   { headers }
      // );

      // console.log("Country API results");
      // console.log(countryApiResults);

      console.log(apiResults.data.elasticResult.resultsTable.source);
      var sourceData = apiResults.data.elasticResult.resultsTable.source;
      productTestDataHeader = sourceData.columns;
      productTestDataBody = sourceData.rows;

      this.setState(
        {
          productTestDataHeader: productTestDataHeader,
          productTableDataBody: productTestDataBody
        },
        () => {
          this.aggregateHandler(productTestDataBody);
          this.chartDataHandler(productTestDataBody);
        }
      );
    }
  };

  aggregateHandler = async aggregateData => {
    var totaledSessionData = 0;
    var totaledUnique = 0;
    var totaledOrders = 0;
    var totaledSales = 0;

    var dataMap = await aggregateData.map(data => {
      totaledSessionData = totaledSessionData + data[1];
      totaledUnique = totaledUnique + data[2];
      totaledOrders = totaledOrders + data[4];
      totaledSales = totaledSales + data[5];
    });
    this.setState({
      totalSessions: totaledSessionData,
      totalUnique: totaledUnique,
      totalOrders: totaledOrders,
      totalSales: totaledSales.toFixed(2)
    });
  };

  chartDataHandler = async aggregateData => {
    if (!this.state.dimensionCheck) {
      var sessionDataArray = [];
      var orderDataArray = [];
      var LabelDataArray = [];

      var dataMap = await aggregateData.map(data => {
        console.log(data[1]);
        sessionDataArray.push(data[1]);
        LabelDataArray.push(data[0]);
        orderDataArray.push(data[4]);
      });

      this.setState(
        {
          chartSessionData: sessionDataArray,
          labelData: LabelDataArray,
          orderData: orderDataArray
        },
        () => {}
      );
    }
  };

  dateChangeHandler = async e => {
    e.preventDefault();

    var fromDate = moment(this.state.startDate._d, "MM/DD/YYYY").format("L");
    var toDate = moment(this.state.endDate._d, "MM/DD/YYYY").format("L");

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
      }
    );
  };

  falseFunc = () => false;
  render() {
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
          <Col sm="6" md="4" lg="3">
            <Card className="text-white bg-cyan theme-color">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="icon-people fa-2x" />
                </ButtonGroup>
                <div className="text-value">
                  {" "}
                  {this.state.totalUnique ? this.state.totalUnique : "N/A"}
                </div>
                <div> Unique Visitors</div>
              </CardBody>
              <div className="chart-wrapper mt-3" style={{ height: "70px" }}>
                <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                />
              </div>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="fa fa-vcard-o fa-2x" />
                </ButtonGroup>
                <div className="text-value">
                  {this.state.totalSessions ? this.state.totalSessions : "N/A"}
                </div>
                <div> Total Sessions</div>
              </CardBody>
              <div
                className="chart-wrapper mt-3 mx-3"
                style={{ height: "70px" }}
              >
                <Bar
                  data={cardChartData2}
                  options={cardChartOpts2}
                  height={70}
                />
              </div>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="fa fa-cart-plus fa-2x" />
                </ButtonGroup>
                <div className="text-value">
                  {" "}
                  {this.state.totalOrders ? this.state.totalOrders : "N/A"}
                </div>
                <div> Total Orders</div>
              </CardBody>
              <div
                className="chart-wrapper mt-3 mx-3"
                style={{ height: "70px" }}
              >
                <Bar
                  data={cardChartData3}
                  options={cardChartOpts3}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col sm="6" md="4" lg="3">
            <Card className="text-white bg-indigo theme-color">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="fa fa-money fa-2x" />
                </ButtonGroup>
                <div className="text-value">
                  ${this.state.totalSales ? this.state.totalSales : "N/A"}
                </div>
                <div> Total Sales</div>
              </CardBody>
              <div className="chart-wrapper mt-3" style={{ height: "70px" }}>
                <Line
                  data={cardChartData4}
                  options={cardChartOpts4}
                  height={70}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* <GoogleMaps /> */}
          <Col sm="12" lg="9">
            <ReportBarChart
              sessionData={this.state.chartSessionData}
              labelData={this.state.labelData}
              orderData={this.state.orderData}
              name={"Total Sessions/Orders"}
            />
          </Col>

          <Col sm="12" lg="3">
            <Card>
              <CardHeader>Sales Breakdown by Country</CardHeader>
              <CardBody>
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">Country</th>
                      <th className="text-center">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-us h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>

                      <td className="text-center">
                        <strong>67%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-ca h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>

                      <td className="text-center">
                        <strong>13%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-eu h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>

                      <td className="text-center">
                        <strong>7%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-br h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>

                      <td className="text-center">
                        <strong>5%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-fr h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>

                      <td className="text-center">
                        <strong>3%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-es h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>

                      <td className="text-center">
                        <strong>3%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-gr h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>

                      <td className="text-center">
                        <strong>2%</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                Data Aggregate Table
              </CardHeader>

              <CardBody>
                <Row>
                  {/* <Col sm="12" lg="3">
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
                  </Col> */}
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
}

export default CompanyDashboard;
