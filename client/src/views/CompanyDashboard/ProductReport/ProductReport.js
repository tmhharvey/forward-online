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
import "./ProductReport.scss";

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

class ProductReport extends React.Component {
  render() {
    return (
      <div>
        <h1>Performance By Product</h1>

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
                      <th>Users</th>
                      <th>Sessions</th>
                      <th>Orders</th>
                      <th>Total Units Sold</th>
                      <th>Average Order Value</th>
                      <th>Total Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>120,484</td>
                      <td>111,597</td>
                      <td>5890</td>
                      <td>5641</td>
                      <td>$24.99</td>
                      <td>
                        <strong className="text-success">$140,968</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>6,484</td>
                      <td>5,597</td>
                      <td>1936</td>
                      <td>1923</td>
                      <td>$24.99</td>
                      <td>
                        <strong className="text-success">$48,055</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>1,484</td>
                      <td>1,337</td>
                      <td>289</td>
                      <td>267</td>
                      <td>$29.99</td>
                      <td>
                        <strong className="text-success">$8,007</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>11,924</td>
                      <td>10,978</td>
                      <td>2445</td>
                      <td>2437</td>
                      <td>$29.99</td>
                      <td>
                        <strong className="text-success">$73,085</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>120,484</td>
                      <td>111,597</td>
                      <td>5890</td>
                      <td>5641</td>
                      <td>$24.99</td>
                      <td>
                        <strong className="text-success">$140,968</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>6,484</td>
                      <td>5,597</td>
                      <td>1936</td>
                      <td>1923</td>
                      <td>$24.99</td>
                      <td>
                        <strong className="text-success">$48,055</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>1,484</td>
                      <td>1,337</td>
                      <td>289</td>
                      <td>267</td>
                      <td>$29.99</td>
                      <td>
                        <strong className="text-success">$8,007</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>11,924</td>
                      <td>10,978</td>
                      <td>2445</td>
                      <td>2437</td>
                      <td>$29.99</td>
                      <td>
                        <strong className="text-success">$73,085</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>120,484</td>
                      <td>111,597</td>
                      <td>5890</td>
                      <td>5641</td>
                      <td>$24.99</td>
                      <td>
                        <strong className="text-success">$140,968</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>6,484</td>
                      <td>5,597</td>
                      <td>1936</td>
                      <td>1923</td>
                      <td>$24.99</td>
                      <td>
                        <strong className="text-success">$48,055</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>1,484</td>
                      <td>1,337</td>
                      <td>289</td>
                      <td>267</td>
                      <td>$29.99</td>
                      <td>
                        <strong className="text-success">$8,007</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>11,924</td>
                      <td>10,978</td>
                      <td>2445</td>
                      <td>2437</td>
                      <td>$29.99</td>
                      <td>
                        <strong className="text-success">$73,085</strong>
                      </td>
                    </tr>
                  </tbody>
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
