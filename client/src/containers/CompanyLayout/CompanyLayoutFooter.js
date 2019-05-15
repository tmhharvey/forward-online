import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class CompanyLayoutFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>
          <a href="https://www.forward.online" target="_blank">
            Forward.Online
          </a>{" "}
          &copy; 2019.
        </span>
        <span className="ml-auto" />
      </React.Fragment>
    );
  }
}

CompanyLayoutFooter.propTypes = propTypes;
CompanyLayoutFooter.defaultProps = defaultProps;

export default CompanyLayoutFooter;
