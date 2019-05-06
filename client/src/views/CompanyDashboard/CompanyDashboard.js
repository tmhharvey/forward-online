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
  CustomInput
} from "reactstrap";
import "./CompanyDashboard.scss";
import { Link } from "react-router-dom";

class CompanyDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalConfirmation: false,
      large: false,
      small: false,
      primary: false,
      companyFunded: false
    };

    // this.toggle = this.toggle.bind(this);
    // this.toggleLarge = this.toggleLarge.bind(this);
    // this.togglePrimary = this.togglePrimary.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleLarge = () => {
    this.setState({
      large: !this.state.large
    });
  };

  toggleConfirmation = () => {
    if (this.state.confirmation) {
      this.setState({
        companyFunded: true
      });
    }
    this.setState({
      confirmation: !this.state.confirmation
    });
  };

  togglePrimary = () => {
    this.setState({
      primary: !this.state.primary
    });
  };

  render() {
    var dashboardRenderedState = "";
    if (this.state.companyFunded) {
      dashboardRenderedState = (
        <div className="animated fadeIn">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify" />
              <strong>Payment Progress</strong>
            </CardHeader>
            <CardBody>
              <h4>Remaining Balance</h4>

              <h1 color="success">$47,250</h1>
              <hr />
              <Progress
                animated
                color="success"
                value="37"
                className="mb-3 progressBar"
              >
                Paid: $27,750
              </Progress>
              <div className="text-right">
                <p>37% Completed</p>
              </div>
            </CardBody>
          </Card>

          <Row>
            <Col xs="12" lg="6">
              <Card className="card-accent-primary">
                <CardHeader>Upcoming Payment</CardHeader>
                <CardBody className="py-4 px-4">
                  <h3 className="mb-2">
                    Payment Due: <strong>$12500</strong>
                  </h3>
                  <p className="mb-2">
                    Estimated Transaction Time: <i>May 1st 10:30am</i>
                  </p>
                  <hr className="mb-2" />
                  <div className="text-center mt-4">
                    <Link to="/company-dashboard/payment-history">
                      <Button color="primary">
                        <i className="fa fa-lightbulb-o" />
                        &nbsp;View Payment History
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" lg="6">
              <Card className="card-accent-success">
                <CardHeader>Apply For More Funding</CardHeader>
                <CardBody className="py-4 px-4">
                  <h3 className="text-center"> Time Remaining:</h3>
                  <p className="mb-3 text-center">124d : 21h : 26m : 46s</p>

                  <hr />
                  <div className="text-center mt-4">
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button color="secondary" disabled>
                        Apply
                      </Button>
                    </Col>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6" lg="3">
              <Card className="card-accent-success">
                <CardHeader>Early Pay-off</CardHeader>
                <CardBody className="py-4 px-4">
                  <div className="text-center">
                    <i class="fa fa-exchange fa-2x mb-3" />
                  </div>

                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <hr className="mb-2" />
                  <div className="text-center mt-4">
                    <Link to="/company-dashboard/payment-history">
                      <Button color="success">Pay Now</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="card-accent-primary">
                <CardHeader>Renewal</CardHeader>
                <CardBody className="py-4 px-4">
                  <div className="text-center">
                    <i class="fa fa-refresh fa-2x mb-3" />
                  </div>

                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <hr className="mb-2" />
                  <div className="text-center mt-4">
                    <Link to="/company-dashboard/payment-history">
                      <Button color="primary">More Info</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="card-accent-warning">
                <CardHeader>Request Extension</CardHeader>
                <CardBody className="py-4 px-4">
                  <div className="text-center">
                    <i class="fa fa-chevron-circle-up fa-2x mb-3" />
                  </div>

                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <hr className="mb-2" />
                  <div className="text-center mt-4">
                    <Link to="/company-dashboard/payment-history">
                      <Button color="warning">Submit Request</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="card-accent-primary">
                <CardHeader>Request Pay-off Letter</CardHeader>
                <CardBody className="py-4 px-4">
                  <div className="text-center">
                    <i class="fa fa-envelope-open-o fa-2x mb-3" />
                  </div>

                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <hr className="mb-2" />
                  <div className="text-center mt-4">
                    <Link to="/company-dashboard/payment-history">
                      <Button color="primary">More Info</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      );
    } else {
      dashboardRenderedState = (
        <>
          <div className="animated fadeIn">
            <Row>
              <Col xs="12" lg="12" className="mt-4">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify" /> Current Offers
                  </CardHeader>
                  <CardBody>
                    <Table responsive striped>
                      <thead>
                        <tr>
                          <th>Lender Name</th>
                          <th>Payment Cycle</th>
                          <th>Rate Factor</th>
                          <th>Amount</th>
                          <th>Approve/Deny</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Financial Capital LLC</td>
                          <td>1 Month</td>
                          <td>10%</td>
                          <td>$100,000</td>
                          <td>
                            {" "}
                            <Button
                              onClick={this.toggleLarge}
                              className="mr-1 btn-success"
                            >
                              Accept
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Wealth Capital LLC</td>
                          <td>1 week</td>
                          <td>20%</td>
                          <td>$50,000</td>
                          <td>
                            {" "}
                            <Button
                              onClick={this.toggleLarge}
                              className="mr-1 btn-success"
                            >
                              Accept
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Modal
              isOpen={this.state.large}
              toggle={this.toggleLarge}
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader toggle={this.toggleLarge}>
                Financial Capital LLC
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col lg="4">
                    <p>
                      <strong>Lender Name</strong>
                    </p>
                    <p>Thomas White</p>
                  </Col>
                  <Col lg="4">
                    <p>
                      <strong>Factor Rate</strong>
                    </p>
                    <p>25%</p>
                  </Col>
                  <Col lg="4">
                    <p>
                      <strong>Funding Amount</strong>
                    </p>
                    <p>$75,000</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <p>
                      <strong>Payment Cycle</strong>
                    </p>
                    <p>Weekly</p>
                  </Col>
                  <Col lg="4">
                    <p>
                      <strong>Payment</strong>
                    </p>
                    <p>$1000</p>
                  </Col>
                  <Col lg="4">
                    <p>
                      <strong>Payment Number</strong>
                    </p>
                    <p>70</p>
                  </Col>
                  <Col lg="12" className="text-center mt-4">
                    <CustomInput
                      type="checkbox"
                      id="accept"
                      label="I accept the terms of use"
                      required
                    />
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  onClick={() => {
                    this.toggleLarge();
                    this.toggleConfirmation();
                  }}
                >
                  Approve
                </Button>{" "}
                <Button color="secondary" onClick={this.toggleLarge}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Modal
              isOpen={this.state.confirmation}
              toggle={this.toggleConfirmation}
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader toggle={this.toggleConfirmation}>
                Congratulations!
              </ModalHeader>
              <ModalBody>
                You will be receiving an email confirmation and will be
                receiving funds within 2-5 days into your linked bank account!
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleConfirmation}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </>
      );
    }
    return <>{dashboardRenderedState}</>;
  }
}

export default CompanyDashboard;
