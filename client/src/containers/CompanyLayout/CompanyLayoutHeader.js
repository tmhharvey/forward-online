import React, { Component } from "react";
import { DropdownMenu, DropdownToggle, Nav } from "reactstrap";
import PropTypes from "prop-types";
import custom from "../../scss/_custom.scss";

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";

import logo from "../../assets/img/brand/mainLogo.png";
import sygnet from "../../assets/img/brand/sygnet.svg";
import avatar from "../../assets/img/avatars/6.jpg";
import { Link } from "react-router-dom";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class CompanyLayoutHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Link
          to={{
            pathname: "/company-dashboard/home"
          }}
        >
          <AppNavbarBrand
            full={{
              src: logo,
              width: 65,
              height: 20,
              alt: "Seed Financial Logo"
            }}
            minimized={{
              src: sygnet,
              width: 30,
              height: 30,
              alt: "CoreUI Logo"
            }}
          />
        </Link>

        <Nav className="ml-auto" navbar>
          <Link
            to={{
              pathname: "/company-dashboard/profile"
            }}
            className="profileAvatar"
          >
            <img
              src={avatar}
              className="img-avatar"
              alt="admin@bootstrapmaster.com"
            />
          </Link>
        </Nav>
      </React.Fragment>
    );
  }
}

CompanyLayoutHeader.propTypes = propTypes;
CompanyLayoutHeader.defaultProps = defaultProps;

export default CompanyLayoutHeader;
