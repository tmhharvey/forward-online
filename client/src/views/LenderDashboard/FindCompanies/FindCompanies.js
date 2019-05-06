import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  CustomInput,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Row,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table
} from "reactstrap";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./FindCompanies.scss";

class FindCompanies extends React.Component {
  render() {
    return (
      <div>
        <h1>Find Your Next Investment</h1>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Payment Method</th>
                      <th>Seeking</th>
                      <th>Additional Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>StreamFluence LLC</td>
                      <td>Paypal</td>
                      <td>$150,000</td>
                      <td>
                        <Link to="/lender-dashboard/company-info">
                          <Button color="primary">More Info</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Kimberly Anne's Subs</td>
                      <td>Paypal</td>
                      <td>$35,000</td>
                      <td>
                        <Link to="/lender-dashboard/company-info">
                          <Button color="primary">More Info</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Novo Coffee Cafe</td>
                      <td>Paypal</td>
                      <td>$85,000</td>
                      <td>
                        <Link to="/lender-dashboard/company-info">
                          <Button color="primary">More Info</Button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FindCompanies;
