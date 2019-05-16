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
import * as Yup from "yup";
import "./TrafficSourceReport.scss";

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
    productTableData: []
  };

  componentDidMount = async () => {
    // const response = await axios.get(
    //   `/api/reporting/v0.1/ProductPerformanceReport`
    // );

    const productTestData = [
      {
        type: "Facebook",
        users: "113,450",
        sessions: "78,423",
        bounceRate: "29%",
        pagesPerSession: "3.2",
        averageSessionDuration: "5 minutes",
        conversionRate: "16%",
        orders: "12,581",
        totalUnitsSold: "9,342",
        averageOrderValue: "$19.99",
        totalRevenue: "$186,746"
      },
      {
        type: "Facebook",
        users: "113,450",
        sessions: "78,423",
        bounceRate: "16%",
        pagesPerSession: "2.8",
        averageSessionDuration: "7 minutes",
        conversionRate: "19%",
        orders: "12,581",
        totalUnitsSold: "9,342",
        averageOrderValue: "$19.99",
        totalRevenue: "$186,746"
      }
    ];

    this.setState({
      productTableData: productTestData
    });
  };
  render() {
    var renderedReportTable = "";
    var productData = this.state.productTableData;
    renderedReportTable = productData.map(product => {
      return (
        <tr>
          <td>{product.type}</td>
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
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Type</th>
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
