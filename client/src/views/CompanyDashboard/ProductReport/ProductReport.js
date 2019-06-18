import React, { Component, lazy } from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import { Line } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import CustomTable from "../../UI/CustomTable/CustomTable";
import apiAuth from "../apiAuth";

// React DateRangePicker
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import Moment from "react-moment";
import moment from "moment";

//Dimensions
import Select from "react-select";
import "react-select/dist/react-select.min.css";
import tableOptions from "./helpers/data/dimensions";

//charts
import charts from "../../UI/Charts";
import ReportBarChart from "../../UI/ReportBarChart/ReportBarChart";

import axios from "axios";
import "./ProductReport.scss";

const dimensionOptions = tableOptions.dimensions;
// const displayOptions = tableOptions.displayOptions;

var columns = [];

const initialValues = {
  accept: false
};

var auth = "Bearer " + apiAuth.auth;

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
    dateRange: false,
    dimensionCheck: false,
    chartSessionData: [],
    labelData: []
  };

  componentDidMount = () => {
    this.apiReportHandler();
  };

  chartDataHandler = async aggregateData => {
    if (!this.state.dimensionCheck) {
      var sessionDataArray = [];
      var orderDataArray = [];
      var LabelDataArray = [];

      var dataMap = await aggregateData.map(data => {
        console.log(data[1]);
        sessionDataArray.push(data[2]);
        LabelDataArray.push(data[0]);
        orderDataArray.push(data[5]);
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

  lineChartHandler = (fromDate, toDate, timeCycle) => {
    //get the dates and parse them into an array grouped by the selected time-period.
    // get the data for sessions and orders for those months
    // aggregate the sessions and orders data by the time-period in which they were in
    //render a graph with the appropriate data
  };

  apiReportHandler = async () => {
    if (this.state.dimensionCheck) {
      this.dimensionHandler();
    } else {
      var productTestDataHeader = "";
      var productTestDataBody = "";
      const headers = {
        Authorization: auth
      };
      columns = [
        {
          value: "Product",
          elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
        },
        {
          value: "Product Sku",
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
          value: "eCommerce Revenue",
          elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
        },
        {
          value: "Conversion Rate",
          elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
        },
        {
          value: "Avg Order Value",
          elements: (index, row) => <div>{!row[8] ? "n/a" : row[8]}</div>
        }
      ];

      console.log("API report fired----");
      // Default API call with no Second Dimension
      if (!this.state.dateRange) {
        var apiResults = await axios.get(
          "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_product_sku&sortOption=sessions&sortOrientation=Desc",
          { headers }
        );

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
              this.chartDataHandler(productTestDataBody);
            }
          );
        } else {
          console.log("The API came back with No Results");
        }
      } else {
        console.log("API report fired WITH a date range");
        var url = `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
          this.state.fromDate
        }&toDate=${
          this.state.toDate
        }&permutation=group_by_product_sku&sortOption=sessions&sortOrientation=Desc`;
        console.log(url);
        var apiResults = await axios.get(url, { headers });

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
            this.chartDataHandler(productTestDataBody);
          }
        );
      }
    }
  };

  dateChangeHandler = async e => {
    console.log("date change handler fired");
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
        if (this.state.dimensionCheck) {
          this.dimensionHandler();
        } else {
          this.apiReportHandler();
        }
      }
    );
  };

  dimensionHandler = async () => {
    console.log("dimension handler fired");
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
            value: "Product",
            elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
          },

          {
            value: "Product Sku",
            elements: (index, row) => <div>{!row[1] ? "n/a" : row[1]}</div>
          },
          {
            value: "Day of Week",
            elements: (index, row) => <div>{!row[2] ? "n/a" : row[2]}</div>
          },
          {
            value: "Sessions",
            elements: (index, row) => <div>{!row[3] ? "n/a" : row[3]}</div>
          },
          {
            value: "Users",
            elements: (index, row) => <div>{!row[4] ? "n/a" : row[4]}</div>
          },
          {
            value: "Total Units",
            elements: (index, row) => <div>{!row[5] ? "n/a" : row[5]}</div>
          },
          {
            value: "Orders",
            elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
          },
          {
            value: "eCommerce Revenue",
            elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
          },
          {
            value: "Conversion Rate",
            elements: (index, row) => <div>{!row[8] ? "n/a" : row[8]}</div>
          },
          {
            value: "Avg Order Value",
            elements: (index, row) => <div>{!row[9] ? "n/a" : row[9]}</div>
          }
        ];
        if (!this.state.dateRange) {
          console.log("Day of week dimension change fired WITHOUT a DATE");
          var apiResults = await axios.get(
            "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=06/01/2019&toDate=06/02/2019&permutation=group_by_product_sku_and_day_of_week&sortOption=sessions&sortOrientation=Desc",
            { headers }
          );
          console.log(apiResults.data.elasticResult);
          var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          productTestDataBody = sourceData.rows;
          this.setState(
            {
              productTestDataHeader: productTestDataHeader,
              productTableDataBody: productTestDataBody
            },
            () => {
              this.chartDataHandler(productTestDataBody);
            }
          );
        } else {
          console.log("dimension Day of Week with a date range");
          var apiResults = await axios.get(
            `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
              this.state.fromDate
            }&toDate=${
              this.state.toDate
            }&permutation=group_by_product_sku_and_day_of_week&sortOption=sessions&sortOrientation=Desc`,
            { headers }
          );
          console.log(apiResults);
          var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          productTestDataBody = sourceData.rows;
          this.setState(
            {
              productTestDataHeader: productTestDataHeader,
              productTableDataBody: productTestDataBody
            },
            () => {
              this.chartDataHandler(productTestDataBody);
            }
          );
        }
      } else if (dimensionValue[0].value === "Country/Region") {
        console.log("API DIMENSION Country/Region report fired----");
        columns = [
          {
            value: "Product",
            elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
          },

          {
            value: "Product Sku",
            elements: (index, row) => <div>{!row[1] ? "n/a" : row[1]}</div>
          },
          {
            value: "Country",
            elements: (index, row) => <div>{!row[2] ? "n/a" : row[2]}</div>
          },
          {
            value: "Region",
            elements: (index, row) => <div>{!row[3] ? "n/a" : row[3]}</div>
          },
          {
            value: "Sessions",
            elements: (index, row) => <div>{!row[4] ? "n/a" : row[4]}</div>
          },
          {
            value: "Users",
            elements: (index, row) => <div>{!row[5] ? "n/a" : row[5]}</div>
          },
          {
            value: "Total Units",
            elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
          },
          {
            value: "Orders",
            elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
          },
          {
            value: "eCommerce Revenue",
            elements: (index, row) => <div>{!row[8] ? "n/a" : row[8]}</div>
          },
          {
            value: "Conversion Rate",
            elements: (index, row) => <div>{!row[9] ? "n/a" : row[9]}</div>
          },
          {
            value: "Avg Order Value",
            elements: (index, row) => <div>{!row[10] ? "n/a" : row[10]}</div>
          }
        ];
        if (!this.state.dateRange) {
          var apiResults = await axios.get(
            "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_product_sku_and_country_region&sortOption=sessions&sortOrientation=Desc",
            { headers }
          );
          console.log(apiResults.data.elasticResult.resultsTable.source);
          var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = sourceData.columns;
          productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader,
            productTableDataBody: productTestDataBody
          });
        } else {
          var apiResults = await axios.get(
            `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
              this.state.fromDate
            }&toDate=${
              this.state.toDate
            }&permutation=group_by_product_sku_and_country_region&sortOption=sessions&sortOrientation=Desc`,
            { headers }
          );
          console.log(apiResults.data.elasticResult.resultsTable.source);
          var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader,
            productTableDataBody: productTestDataBody
          });
        }
      } else if (dimensionValue[0].value === "Hour of Day") {
        console.log("HOUR dimension change fired");
        columns = [
          {
            value: "Product",
            elements: (index, row) => <div>{!row[0] ? "n/a" : row[0]}</div>
          },

          {
            value: "Product Sku",
            elements: (index, row) => <div>{!row[1] ? "n/a" : row[1]}</div>
          },
          {
            value: "Hour of Day",
            elements: (index, row) => <div>{!row[2] ? "n/a" : row[2]}</div>
          },
          {
            value: "Sessions",
            elements: (index, row) => <div>{!row[3] ? "n/a" : row[3]}</div>
          },
          {
            value: "Users",
            elements: (index, row) => <div>{!row[4] ? "n/a" : row[4]}</div>
          },
          {
            value: "Total Units",
            elements: (index, row) => <div>{!row[5] ? "n/a" : row[5]}</div>
          },
          {
            value: "Orders",
            elements: (index, row) => <div>{!row[6] ? "n/a" : row[6]}</div>
          },
          {
            value: "eCommerce Revenue",
            elements: (index, row) => <div>{!row[7] ? "n/a" : row[7]}</div>
          },
          {
            value: "Conversion Rate",
            elements: (index, row) => <div>{!row[8] ? "n/a" : row[8]}</div>
          },
          {
            value: "Avg Order Value",
            elements: (index, row) => <div>{!row[9] ? "n/a" : row[9]}</div>
          }
        ];
        if (!this.state.dateRange) {
          console.log("HOUR dimension change fired WITHOUT a date");
          var apiResults = await axios.get(
            "https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=1/1/1900&toDate=1/1/2100&permutation=group_by_product_sku_and_hour_of_day&sortOption=sessions&sortOrientation=Desc",
            { headers }
          );
          console.log(apiResults.data.elasticResult.resultsTable.source);
          var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader,
            productTableDataBody: productTestDataBody
          });
        } else {
          console.log("HOUR dimension change fired WITH a date");
          var apiResults = await axios.get(
            `https://cors-anywhere.herokuapp.com/http://97.68.199.221:12635/api/reporting/v0.1/ProductPerformanceReport/GetReportResults?fromDate=${
              this.state.fromDate
            }&toDate=${
              this.state.toDate
            }&permutation=group_by_product_sku_and_hour_of_day&sortOption=sessions&sortOrientation=Desc`,
            { headers }
          );
          console.log(apiResults.data.elasticResult.resultsTable.source);
          var sourceData = apiResults.data.elasticResult.resultsTable.source;
          productTestDataHeader = columns;
          productTestDataBody = sourceData.rows;
          this.setState({
            productTestDataHeader: productTestDataHeader,
            productTableDataBody: productTestDataBody
          });
        }
      } else {
        this.apiReportHandler();
      }
    } else {
      this.apiReportHandler();
    }
  };

  saveDimensionChanges = dimension => {
    var resetValue = dimension;
    var oldDimensionCheck = this.state.dimensionCheck;
    var newDimensionCheck = !oldDimensionCheck;
    console.log("dimension state changing...");
    console.log("The old dimension check was.. " + oldDimensionCheck);
    console.log("The new dimension check is.. " + newDimensionCheck);

    if (dimension.length > 1) {
      resetValue.shift();
    }

    if (dimension.length < 1) {
      resetValue = false;
    }

    this.setState(
      {
        dimension: resetValue,
        dimensionCheck: newDimensionCheck
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
          <Col sm="12">
            <ReportBarChart
              sessionData={this.state.chartSessionData}
              labelData={this.state.labelData}
              orderData={this.state.orderData}
              name={"Product Chart"}
            />
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

export default ProductReport;
