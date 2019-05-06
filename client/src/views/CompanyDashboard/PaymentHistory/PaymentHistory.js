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
import * as Yup from "yup";
import "./PaymentHistory.scss";

class PaymentHistory extends React.Component {
  render() {
    return (
      <div>
        <h1>Payment History</h1>
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
                      <th>Payment</th>
                      <th>Payment Method</th>
                      <th>Date Paid</th>
                      <th>Description</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/01/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="success">Paid</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/01/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="success">Paid</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/01/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="success">Paid</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/03/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/03/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="danger">Unpaid</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/01/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="success">Paid</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/01/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="success">Paid</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/03/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/03/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/03/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/03/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>$1250</td>
                      <td>Paypal</td>
                      <td>2012/03/01</td>
                      <td>Company Payment</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
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

export default PaymentHistory;
