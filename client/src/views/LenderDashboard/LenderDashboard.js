import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Progress,
  Row,
  Col,
  Button,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  CustomInput,
  CardColumns,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { Bar, Doughnut, Line, Pie, Polar, Radar } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import "./LenderDashboard.scss";
import { Link } from "react-router-dom";

const pie = {
  labels: ["StreamFluence", "Kimberly Anne's Subs", "Yen's Chinese"],
  datasets: [
    {
      data: [85000, 35000, 24000],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Total Monthly Revenue",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4000, 5900, 8000, 8000, 8000, 17500, 23000]
    }
  ]
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

class LenderDashboard extends Component {
  render() {
    return (
      <>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" lg="6">
              <Card>
                <CardHeader>My Portfolio</CardHeader>
                <h2 />
                <CardBody>
                  <div className="chart-wrapper">
                    <Pie data={pie} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <CardHeader>Revenue</CardHeader>
                <CardBody>
                  <div className="chart-wrapper">
                    <Line data={line} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify" />
                  Funded Companies
                </CardHeader>
                <CardBody>
                  <Table responsive striped>
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="align-middle pl-4 pb-5">
                          <h5>StreamFluence LLC</h5>
                        </td>
                        <td>
                          <Card>
                            <CardBody>
                              <div>
                                <h5 className="text-left">$27,750 / $75,000</h5>
                              </div>

                              <Progress
                                animated
                                color="success"
                                value="37"
                                className="lenderDashboardProgressBar align-middle"
                              >
                                $27,750
                              </Progress>
                              <h5 className="text-right">37% Completed</h5>
                            </CardBody>
                          </Card>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle pl-4 pb-5">
                          <h5>Kimberly Anne's Subs</h5>
                        </td>
                        <td>
                          <Card>
                            <CardBody>
                              <div>
                                <h5 className="text-left">$3,750 / $25,000</h5>
                              </div>

                              <Progress
                                animated
                                color="success"
                                value="15"
                                className="lenderDashboardProgressBar align-middle"
                              >
                                $3,750
                              </Progress>
                              <h5 className="text-right">15% Completed</h5>
                            </CardBody>
                          </Card>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle pl-4 pb-5">
                          <h5>Yen's Chinese</h5>
                        </td>
                        <td>
                          <Card>
                            <CardBody>
                              <div>
                                <h5 className="text-left">$30,750 / $35,000</h5>
                              </div>

                              <Progress
                                animated
                                color="success"
                                value="87"
                                className="lenderDashboardProgressBar align-middle"
                              >
                                $30,750
                              </Progress>
                              <h5 className="text-right">87% Completed</h5>
                            </CardBody>
                          </Card>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default LenderDashboard;
