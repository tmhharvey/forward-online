import React, { Component } from "react";
import { Bar, Doughnut, Line, Pie, Polar, Radar } from "react-chartjs-2";
import { Card, CardBody, CardColumns, CardHeader, Col, Row } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false
};

class ReportLineChart extends Component {
  render() {
    let bar = {
      labels: this.props.labelData,
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
          data: this.props.sessionData
        }
      ]
    };

    if (this.props.orderData) {
      line = {
        labels: this.props.labelData,
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
            data: this.props.sessionData
          },
          {
            label: "Orders",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(46, 204, 113, 0.4)",
            borderColor: "rgba(46, 204, 113)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(46, 204, 113, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(46, 204, 113, 1)",
            pointHoverBorderColor: "rgba(46, 204, 113, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.orderData
          }
        ]
      };
    }

    return (
      <Card>
        <CardHeader>
          {this.props.name}
          <div className="card-header-actions" />
        </CardHeader>

        <CardBody>
          <div className="chart-wrapper">
            <Line data={line} options={options} />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default ReportLineChart;
