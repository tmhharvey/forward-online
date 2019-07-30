import React, { Component } from "react";
import { Tooltip } from "reactstrap";
import "./SimpleTooltip.scss";
class SimpleTooltip extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Tooltip
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        {...this.props}
        className="simpleTooltip"
      />
    );
  }
}

export default SimpleTooltip;
