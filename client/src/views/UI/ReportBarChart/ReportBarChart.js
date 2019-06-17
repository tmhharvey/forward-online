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

class ReportBarChart extends Component {
  render() {
    let bar = {
      labels: this.props.labelData,
      datasets: [
        {
          label: "Sessions",
          backgroundColor: "rgb(32,168,216, 0.6)",
          borderColor: "rgb(32,168,216)",
          borderWidth: 1,
          hoverBackgroundColor: "rgb(32,168,216, 0.6)",
          hoverBorderColor: "rgb(32,168,216, 1)",
          data: this.props.sessionData
        }
      ]
    };

    if (this.props.orderData) {
      bar = {
        labels: this.props.labelData,
        datasets: [
          {
            label: "Sessions",
            backgroundColor: "rgb(32,168,216, 0.4)",
            borderColor: "rgb(32,168,216)",
            borderWidth: 1,
            hoverBackgroundColor: "rgb(32,168,216, 0.4)",
            hoverBorderColor: "rgb(32,168,216, 1)",
            data: this.props.sessionData
          },
          {
            label: "Orders",
            backgroundColor: "rgb(77,189,116, 0.4)",
            borderColor: "rgb(77,189,116)",
            borderWidth: 1,
            hoverBackgroundColor: "rgb(77,189,116, 0.4)",
            hoverBorderColor: "rgb(77,189,116, 1)",
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
            <Bar data={bar} options={options} />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default ReportBarChart;
