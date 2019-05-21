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
import tableOptions from "./data/dimensions";

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

const initialValues = {
  accept: false
};

class ProductReport extends React.Component {
  state = {
    productTableData: [],
    dimension: [""],
    displayOptions: {
      users: true
    }
  };

  handleDisplayChange = event => {
    var target = event.target;
    var name = target.name;
    var currentCheck = { ...this.state.displayOptions.users };
    var newCheck = !currentCheck;

    console.log("NEW target checked: " + newCheck);

    this.setState(
      {
        displayOptions: {
          [name]: newCheck
        }
      },
      () => {
        console.log(this.state.displayOptions);
      }
    );
  };

  componentDidMount = async () => {
    // const response = await axios.get(
    //  "<API CALL HERE>"
    // );

    //GROUP PRODUCT BY DATES
    // /api/reporting/v0.1/ProductPerformanceReport/#/definitions/group_by_product_sku_and_day_of_week

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
    // /api/reporting/v0.1/ProductPerformanceReport/#/definitions/group_by_product_sku_and_day_of_week/#/definitions/Summary_ProductPerformance_Report_SortOptions

    productTestData = [
      {
        name: "T-shirt Stark Grey",
        trafficSource: "Source 1",
        users: "313,450",
        sessions: "278,423",

        orders: "36,581",
        totalUnitsSold: "19,342",
        averageOrderValue: "$19.99",
        totalRevenue: "$186,746"
      },
      {
        name: "T-shirt Lannister Red",
        trafficSource: "Source 2",
        users: "413,450",
        sessions: "188,423",

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
    var dimensionValue = [...this.state.dimension];
    var updatedDimensionValue;
    var finalDimensionValue = [];
    if (dimensionValue[0]) {
      var updatedDimensionValue = await dimensionValue.map(dimension => {
        if (dimension.value === "Device") {
          return [
            {
              dimension: "Smart Phone",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Tablet",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "2,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$36,746"
            },
            {
              dimension: "Desktop",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              totalUnitsSold: "6,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$86,746"
            },
            {
              dimension: "Smart Phone",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "5,581",
              totalUnitsSold: "8,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$42,746"
            },
            {
              dimension: "Tablet",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "4,581",
              totalUnitsSold: "7,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$58,746"
            },
            {
              dimension: "Desktop",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "9,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$86,746"
            }
          ];
        } else if (dimension.value === "State") {
          return [
            {
              dimension: "Colorado",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Florida",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Colorado",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Florida",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            }
          ];
        } else if (dimension.value === "Hour") {
          return [
            {
              dimension: "12:00",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "13:00",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "14:00",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "12:00",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "13:00",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "14:00",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            }
          ];
        } else if (dimension.value === "Day of Week") {
          return [
            {
              dimension: "Monday",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Tuesday",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Wednesday",
              name: "T-shirt Stark Grey",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Monday",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Tuesday",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

              orders: "12,581",
              totalUnitsSold: "5,342",
              averageOrderValue: "$19.99",
              totalRevenue: "$76,746"
            },
            {
              dimension: "Wednesday",
              name: "T-shirt Lannister Red",
              users: "113,450",
              sessions: "78,423",

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
          name: "T-shirt Stark Grey",
          users: "313,450",
          sessions: "278,423",

          orders: "36,581",
          totalUnitsSold: "19,342",
          averageOrderValue: "$19.99",
          totalRevenue: "$186,746"
        },
        {
          name: "T-shirt Stark Grey",
          users: "413,450",
          sessions: "188,423",

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
        console.log("==== Should be 1 value ====");
        console.log(this.state.dimension);
        this.dimensionHandler();
      }
    );
  };

  falseFunc = () => false;
  render() {
    var renderedReportTable = "";
    var productData = this.state.productTableData;
    renderedReportTable = productData.map(product => {
      return (
        <tr>
          {this.state.dimension[0] ? <td>{product.dimension}</td> : null}
          <td>{product.name}</td>
          <td>{product.users}</td>
          <td>{product.sessions}</td>
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

                <Table responsive striped>
                  <thead>
                    <tr>
                      {this.state.dimension[0] ? <th>Dimension</th> : null}
                      <th>Name</th>
                      <th>Users</th>
                      <th>Sessions</th>
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

export default ProductReport;
