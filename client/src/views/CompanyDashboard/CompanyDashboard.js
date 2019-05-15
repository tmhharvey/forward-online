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
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./CompanyDashboard.scss";
import Widget04 from "../UI/Widgets/Widget04";
import GoogleMaps from "../UI/GoogleMaps/GoogleMaps";
const Widget03 = lazy(() => import("../UI/Widgets/Widget03"));

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

class CompanyDashboard extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="6" md="4" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="icon-people fa-2x" />
                </ButtonGroup>
                <div className="text-value">87,500</div>
                <div> Average Sessions</div>
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
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="fa fa-credit-card fa-2x" />
                </ButtonGroup>
                <div className="text-value">3,448</div>
                <div> Average Units Sold</div>
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
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="fa fa-cart-plus fa-2x" />
                </ButtonGroup>
                <div className="text-value">3,448</div>
                <div> Average Orders Made</div>
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
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="fa fa-refresh fa-2x" />
                </ButtonGroup>
                <div className="text-value">7%</div>
                <div> Average Conversion %</div>
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
          <Col sm="12" lg="6">
            <GoogleMaps />
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <CardHeader>Global Sales Breakdown</CardHeader>
              <CardBody>
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">Country</th>
                      <th className="text-center">-</th>
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
                        <strong>2.345</strong>
                      </td>
                      <td className="text-center">
                        <strong>10%</strong>
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
                        <strong>2.345</strong>
                      </td>
                      <td className="text-center">
                        <strong>10%</strong>
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
                        <strong>2.345</strong>
                      </td>
                      <td className="text-center">
                        <strong>10%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-in h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>
                      <td className="text-center">
                        <strong>2.345</strong>
                      </td>
                      <td className="text-center">
                        <strong>10%</strong>
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
                        <strong>2.345</strong>
                      </td>
                      <td className="text-center">
                        <strong>10%</strong>
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
                        <strong>2.345</strong>
                      </td>
                      <td className="text-center">
                        <strong>10%</strong>
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
                        <strong>2.345</strong>
                      </td>
                      <td className="text-center">
                        <strong>10%</strong>
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

export default CompanyDashboard;
