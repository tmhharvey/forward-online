import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class CompanyLayoutAside extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return <React.Fragment>Aside</React.Fragment>;
  }
}

CompanyLayoutAside.propTypes = propTypes;
CompanyLayoutAside.defaultProps = defaultProps;

export default CompanyLayoutAside;
