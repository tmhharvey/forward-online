import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

import logo from "../../../assets/img/brand/mainLogo.png";

class CompanyRegister extends Component {
  state = {
    email: "",
    password: "",
    passwordValidate: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  registerHandler = async (e, email, password) => {
    e.preventDefault();

    try {
      console.log("we're about to post login to the server");
      console.log(process.env.REACT_APP_BACKEND);
      const registerResponse = await fetch(
        process.env.REACT_APP_BACKEND + "auth/register",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password
          }),
          credentials: "include",
          headers: {
            "Content-type": "application/json"
          }
        }
      );

      const parsedRes = await registerResponse.json();
      console.log("Register Response Data....." + parsedRes);

      // If a successful response...

      if (parsedRes.status === 200) {
        console.log("Sucessful register! Response is...");
        console.log(parsedRes.data);
        console.log(parsedRes.data.userId);
        console.log(parsedRes.data.userType);

        // set state
        const newUserType = parsedRes.data.userType;
        this.setState(
          {
            userId: parsedRes.data.userId,
            userType: newUserType
          },
          () => {
            // window.location.href =
            //   process.env.REACT_APP_BACKEND + "#/company-dashboard/profile";

            localStorage.setItem("authenticated", true);
            this.props.history.push("/company-dashboard/home");
          }
        );
      } else {
        console.log("Failed to register!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        onChange={this.handleInputChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        name="password"
                        onChange={this.handleInputChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        name="passwordValidate"
                        onChange={this.handleInputChange}
                      />
                    </InputGroup>
                    {this.state.password === this.state.passwordValidate ? (
                      <Button
                        color="primary"
                        block
                        onClick={e => {
                          this.registerHandler(
                            e,
                            this.state.email,
                            this.state.password
                          );
                        }}
                      >
                        Create Account
                      </Button>
                    ) : (
                      <p className="text-danger">Passwords Don't Match!</p>
                    )}
                  </Form>
                </CardBody>
                <CardFooter className="p-4 text-center">
                  <img src={logo} alt="logo" />
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CompanyRegister;
