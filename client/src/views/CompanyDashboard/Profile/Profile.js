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
  Row
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "./profile.scss";

const validationSchema = function(values) {
  return Yup.object().shape({
    annualRevenue: Yup.string().required("Annual Revenue is required"),
    monthlyRevenue: Yup.string().required("Annual Revenue is required"),
    amountSeeking: Yup.string().required("Amount Seeking is required"),
    corporateName: Yup.string().required("Corporate Name is required"),
    dba: Yup.string().required("If not applicable, type N/A"),
    physicalAddress: Yup.string()
      .min(5, `physicalAddress has to be at least 5 characters`)
      .required("Physical Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .min(9, `Phone Number has to be at least ${9} characters!`),
    fax: Yup.string().required("Fax Number is required"),
    taxId: Yup.string().required("Tax Id is required"),
    businessStartDate: Yup.string().required("Business Start Date is required"),
    ownershipLength: Yup.string().required("Ownership Length is required"),
    websiteLink: Yup.string().required("Website Link is required"),
    entityType: Yup.string().required("Entity Type is required"),
    productAndServices: Yup.string().required(
      "Product/Services Sold is required"
    ),
    ownerName: Yup.string().required("The Owner Name is required"),
    ownerTitle: Yup.string().required("The Owner Title is required"),
    ownerPercentage: Yup.string().required("The Ownership % is required"),
    merchantHomeAddress: Yup.string().required("The Home Address is required"),
    merchantCity: Yup.string().required("The City is required"),
    merchantState: Yup.string().required("The City is required"),
    merchantSocial: Yup.string().required("The SSN is required"),
    merchantDob: Yup.string().required("The DOB is required"),
    merchantWorkPhone: Yup.string().required("The Phone Number is required"),
    merchantHomePhone: Yup.string().required("The Phone Number is required"),
    partnerName: Yup.string().required("The Partner Name is required"),
    partnerTitle: Yup.string().required("The Partner Title is required"),
    partnerPercentage: Yup.string().required("The Ownership % is required"),
    partnerHomeAddress: Yup.string().required("The Home Address is required"),
    partnerCity: Yup.string().required("The City is required"),
    partnerState: Yup.string().required("The City is required"),
    partnerSocial: Yup.string().required("The SSN is required"),
    partnerDob: Yup.string().required("The DOB is required"),
    partnerWorkPhone: Yup.string().required("The Phone Number is required"),
    partnerHomePhone: Yup.string().required("The Phone Number is required"),

    companyEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        "Password must contain: numbers, uppercase and lowercase letters\n"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([values.password], "Passwords must match")
      .required("Password confirmation is required"),
    accept: Yup.bool()
      .required("* required")
      .test(
        "accept",
        "You have to accept our Terms and Conditions!",
        value => value === true
      )
  });
};

const validate = getValidationSchema => {
  return values => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const getErrorsFromValidationError = validationError => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR]
    };
  }, {});
};

const initialValues = {
  corporateName: "",
  dba: "",
  physicalAddress: "",
  city: "",
  state: "",
  zipCode: "",
  phone: "",
  fax: "",
  taxId: "",
  businessStartDate: "",
  ownershipLength: "",
  websiteLink: "",
  companyEmail: "",
  productAndServices: "",
  ownerName: "",
  ownerTitle: "",
  ownerPercentage: "",
  merchantHomeAddress: "",
  merchantZipCode: "",
  merchantSocial: "",
  merchantDob: "",
  merchantHomePhone: "",
  merchantWorkPhone: "",
  partnerName: "",
  partnerTitle: "",
  partnerOwnershipPercentage: "",
  partnerCity: "",
  partnerState: "",
  partnerZipCode: "",
  partnerDob: "",
  partnerHomePhone: "",
  partnerWorkPhone: "",
  annualRevenue: "",
  monthlyRevenue: "",
  amountSeeking: "",

  accept: false
};

const onSubmit = (values, { setSubmitting, setErrors }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    // console.log('User has been successfully saved!', values)
    setSubmitting(false);
  }, 2000);
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.touchAll = this.touchAll.bind(this);
  }

  findFirstError(formName, hasError) {
    const form = document.forms[formName];
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus();
        break;
      }
    }
  }

  validateForm(errors) {
    this.findFirstError("simpleForm", fieldName => {
      return Boolean(errors[fieldName]);
    });
  }

  touchAll(setTouched, errors) {
    setTouched({
      corporateName: true,
      dba: true,
      physicalAddress: true,
      city: true,
      state: true,
      zipCode: true,
      phone: true,
      fax: true,
      taxId: true,
      businessStartDate: true,
      ownershipLength: true,
      websiteLink: true,
      entityType: true,
      companyEmail: true,
      productAndServices: true,
      ownerName: true,
      ownerTitle: true,
      ownerPercentage: true,
      merchantCity: true,
      merchantState: true,
      merchantZipCode: true,
      merchantDob: true,
      merchantHomePhone: true,
      merchantWorkPhone: true,
      partnerName: true,
      partnerTitle: true,
      partnerOwnershipPercentage: true,
      partnerCity: true,
      partnerState: true,
      partnerZipCode: true,
      partnerDob: true,
      partnerHomePhone: true,
      partnerWorkPhone: true,
      annualRevenue: true,
      monthlyRevenue: true,
      amountSeeking: true,
      accept: true
    });
    this.validateForm(errors);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card className="profileCard">
          <CardHeader>
            <i className="icon-note" />
            <strong>Profile Application</strong>

            <div className="card-header-actions">
              <a
                className="card-header-action"
                href="https://github.com/jaredpalmer/formik"
                target="_blank"
                rel="noreferrer noopener"
              />
            </div>
          </CardHeader>
          <CardBody>
            {" "}
            <hr />
            <Formik
              initialValues={initialValues}
              validate={validate(validationSchema)}
              onSubmit={onSubmit}
              render={({
                values,
                errors,
                touched,
                status,
                dirty,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                handleReset,
                setTouched
              }) => (
                <Row>
                  <Col lg="2" />
                  <Col lg="8">
                    <Form onSubmit={handleSubmit} noValidate name="simpleForm">
                      <h3>Profile Information</h3>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <Label for="annualRevenue">Email</Label>
                            <Input
                              type="text"
                              name="annualRevenue"
                              id="annualRevenue"
                              placeholder="$240,000"
                              autoComplete="given-name"
                              valid={!errors.annualRevenue}
                              invalid={
                                touched.annualRevenue && !!errors.annualRevenue
                              }
                              autoFocus={true}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.annualRevenue}
                            />
                            <FormFeedback>{errors.annualRevenue}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <Label for="monthlyRevenue">Company Name</Label>
                            <Input
                              type="text"
                              name="monthlyRevenue"
                              id="monthlyRevenue"
                              placeholder="$10,000"
                              autoComplete="given-name"
                              valid={!errors.monthlyRevenue}
                              invalid={
                                touched.monthlyRevenue &&
                                !!errors.monthlyRevenue
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.monthlyRevenue}
                            />
                            <FormFeedback>{errors.monthlyRevenue}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <Label for="amountSeeking">
                              Contact Information
                            </Label>
                            <Input
                              type="text"
                              name="amountSeeking"
                              id="amountSeeking"
                              placeholder="$100,000"
                              autoComplete="given-name"
                              valid={!errors.amountSeeking}
                              invalid={
                                touched.amountSeeking && !!errors.amountSeeking
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.amountSeeking}
                            />
                            <FormFeedback>{errors.amountSeeking}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>

                      <FormGroup>
                        <Button
                          type="submit"
                          color="primary"
                          className="mr-1"
                          disabled={isSubmitting || !isValid}
                        >
                          {isSubmitting ? "Wait..." : "Submit"}
                        </Button>
                        <Button
                          type="button"
                          color="success"
                          className="mr-1"
                          onClick={() => this.touchAll(setTouched, errors)}
                          disabled={isValid}
                        >
                          Validate
                        </Button>
                        <Button
                          type="reset"
                          color="danger"
                          className="mr-1"
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col lg="2" />
                </Row>
              )}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Profile;
