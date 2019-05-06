import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardHeader,
  Row
} from "reactstrap";

import "./CompanyBankAuth.scss";

class CompanyBankAuth extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <h1 className="text-center mb-4">
                Authenticate Your Bank Account
              </h1>
              <Row className="bankAuthSection">
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3">
                  <Card className="card-accent-primary">
                    <CardHeader className="text-center">Chase Bank</CardHeader>
                    <CardBody className="py-4 px-4">
                      <div className="text-center">
                        <i class="fa fa-bank fa-2x mb-3" />
                      </div>

                      <hr className="mb-2" />
                      <div className="text-center mt-4">
                        <Link to="/company-dashboard/payment-history">
                          <Button color="primary">Authenticate</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CompanyBankAuth;
