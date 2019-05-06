import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class LenderLayoutAside extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return <React.Fragment>Aside</React.Fragment>;
  }
}

LenderLayoutAside.propTypes = propTypes;
LenderLayoutAside.defaultProps = defaultProps;

export default LenderLayoutAside;
