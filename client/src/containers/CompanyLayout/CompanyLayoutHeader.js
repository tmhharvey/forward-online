import React, { Component } from "react";
import {
  DropdownMenu,
  DropdownToggle,
  Nav,
  Dropdown,
  DropdownItem,
  Badge
} from "reactstrap";
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
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

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

        <Dropdown
          nav
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          className="headerDropdown"
        >
          <DropdownToggle nav>
            <img
              src={avatar}
              className="img-avatar"
              alt="admin@bootstrapmaster.com"
            />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center">
              <strong>Account</strong>
            </DropdownItem>

            <DropdownItem>
              <Link
                to={{
                  pathname: "/company-dashboard/profile"
                }}
                className="profileAvatar"
              >
                <i className="fa fa-user" /> Profile
              </Link>
            </DropdownItem>

            <DropdownItem onClick={this.props.logout}>
              <i className="fa fa-lock" /> Logout
            </DropdownItem>
            {/*<DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

CompanyLayoutHeader.propTypes = propTypes;
CompanyLayoutHeader.defaultProps = defaultProps;

export default CompanyLayoutHeader;
