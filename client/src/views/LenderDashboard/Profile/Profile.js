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
                      <h3>Funding Request Information</h3>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <Label for="annualRevenue">Annual Revenue</Label>
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
                            <Label for="monthlyRevenue">Monthly Revenue</Label>
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
                            <Label for="amountSeeking">Amount Seeking</Label>
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
                      <h3>Business Information</h3>
                      <FormGroup>
                        <Label for="corporateName">Legal/Corporate Name</Label>
                        <Input
                          type="text"
                          name="corporateName"
                          id="corporateName"
                          placeholder="Corporate Name"
                          autoComplete="given-name"
                          valid={!errors.corporateName}
                          invalid={
                            touched.corporateName && !!errors.corporateName
                          }
                          autoFocus={false}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.corporateName}
                        />
                        <FormFeedback>{errors.corporateName}</FormFeedback>
                      </FormGroup>
                      <FormGroup>
                        <Label for="dba">DBA:</Label>
                        <Input
                          type="text"
                          name="dba"
                          id="dba"
                          placeholder="Doing Business As:"
                          autoComplete="family-name"
                          valid={!errors.dba}
                          invalid={touched.dba && !!errors.dba}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.dba}
                        />
                        <FormFeedback>{errors.dba}</FormFeedback>
                      </FormGroup>
                      <FormGroup>
                        <Label for="physicalAddress">Physical Address</Label>
                        <Input
                          type="text"
                          name="physicalAddress"
                          id="physicalAddress"
                          placeholder="Physical Address"
                          autoComplete="physicalAddress"
                          valid={!errors.physicalAddress}
                          invalid={
                            touched.physicalAddress && !!errors.physicalAddress
                          }
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.physicalAddress}
                        />
                        <FormFeedback>{errors.physicalAddress}</FormFeedback>
                      </FormGroup>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="city">City</Label>
                            <Input
                              type="text"
                              name="city"
                              id="city"
                              placeholder="Denver"
                              autoComplete="city"
                              valid={!errors.city}
                              invalid={touched.city && !!errors.city}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.city}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.city}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="state">State</Label>
                            <Input
                              type="text"
                              name="state"
                              id="state"
                              placeholder="Colorado"
                              autoComplete="state"
                              valid={!errors.state}
                              invalid={touched.state && !!errors.state}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.state}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.state}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="zipCode">Zip Code</Label>
                            <Input
                              type="text"
                              name="zipCode"
                              id="zipCode"
                              placeholder="32768"
                              autoComplete="zipCode"
                              valid={!errors.zipCode}
                              invalid={touched.zipCode && !!errors.zipCode}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.zipCode}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.zipCode}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="phone">Phone Number</Label>
                            <Input
                              type="text"
                              name="phone"
                              id="phone"
                              placeholder="###-###-####"
                              autoComplete="phone"
                              valid={!errors.phone}
                              invalid={touched.phone && !!errors.phone}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.phone}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="fax">Fax Number</Label>
                            <Input
                              type="text"
                              name="fax"
                              id="fax"
                              placeholder="Fax #"
                              autoComplete="fax"
                              valid={!errors.fax}
                              invalid={touched.fax && !!errors.fax}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.fax}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.fax}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="taxId">Federal Tax Id</Label>
                            <Input
                              type="text"
                              name="taxId"
                              id="taxId"
                              placeholder="Tax Id"
                              autoComplete="taxId"
                              valid={!errors.taxId}
                              invalid={touched.taxId && !!errors.taxId}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.taxId}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.taxId}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="businessStartDate">
                              Business Start Date
                            </Label>
                            <Input
                              type="text"
                              name="businessStartDate"
                              id="businessStartDate"
                              placeholder="08/01/2016"
                              autoComplete="businessStartDate"
                              valid={!errors.businessStartDate}
                              invalid={
                                touched.businessStartDate &&
                                !!errors.businessStartDate
                              }
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.businessStartDate}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>
                              {errors.businessStartDate}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="ownershipLength">
                              Length of Ownership
                            </Label>
                            <Input
                              type="text"
                              name="ownershipLength"
                              id="ownershipLength"
                              placeholder="2 years"
                              autoComplete="ownershipLength"
                              valid={!errors.ownershipLength}
                              invalid={
                                touched.ownershipLength &&
                                !!errors.ownershipLength
                              }
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.ownershipLength}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>
                              {errors.ownershipLength}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="websiteLink">Website Link</Label>
                            <Input
                              type="text"
                              name="websiteLink"
                              id="websiteLink"
                              placeholder="www.example.com"
                              autoComplete="websiteLink"
                              valid={!errors.websiteLink}
                              invalid={
                                touched.websiteLink && !!errors.websiteLink
                              }
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.websiteLink}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.websiteLink}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="entityType">Type of Entity</Label>
                        <Input
                          type="select"
                          name="entityType"
                          id="entityType"
                          autoComplete="entityType"
                          valid={!errors.entityType}
                          invalid={touched.entityType && !!errors.entityType}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.entityType}
                        >
                          <option />
                          <option>Sole Proprietorship</option>
                          <option>Partnership</option>
                          <option>Corporation</option>
                          <option>LLC</option>
                          <option>Other</option>
                        </Input>
                        <FormFeedback>{errors.entityType}</FormFeedback>
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="companyEmail">Email</Label>
                            <Input
                              type="text"
                              name="companyEmail"
                              id="companyEmail"
                              placeholder="companyemail@example.com"
                              autoComplete="companyEmail"
                              valid={!errors.companyEmail}
                              invalid={
                                touched.companyEmail && !!errors.companyEmail
                              }
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.companyEmail}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.companyEmail}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="productAndServices">
                              Product/Services Sold
                            </Label>
                            <Input
                              type="text"
                              name="productAndServices"
                              id="productAndServices"
                              placeholder="We wholesale widgets"
                              autoComplete="productAndServices"
                              valid={!errors.productAndServices}
                              invalid={
                                touched.productAndServices &&
                                !!errors.productAndServices
                              }
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.productAndServices}
                            />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>
                              {errors.productAndServices}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup />
                      <h3>Merchant / Owner Information</h3> <hr />
                      <FormGroup>
                        <Label for="ownerName">
                          Corporate Office / Owner Name
                        </Label>
                        <Input
                          type="text"
                          name="ownerName"
                          id="ownerName"
                          placeholder="Corporate Name"
                          autoComplete="given-name"
                          valid={!errors.ownerName}
                          invalid={touched.ownerName && !!errors.ownerName}
                          autoFocus={false}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.ownerName}
                        />
                        <FormFeedback>{errors.ownerName}</FormFeedback>
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="ownerTitle">Owner Title</Label>
                            <Input
                              type="text"
                              name="ownerTitle"
                              id="ownerTitle"
                              placeholder="CEO"
                              autoComplete="given-name"
                              valid={!errors.ownerTitle}
                              invalid={
                                touched.ownerTitle && !!errors.ownerTitle
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.ownerTitle}
                            />
                            <FormFeedback>{errors.ownerTitle}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="ownerPercentage">Ownership %</Label>
                            <Input
                              type="text"
                              name="ownerPercentage"
                              id="ownerPercentage"
                              placeholder="51%"
                              autoComplete="given-name"
                              valid={!errors.ownerPercentage}
                              invalid={
                                touched.ownerPercentage &&
                                !!errors.ownerPercentage
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.ownerPercentage}
                            />
                            <FormFeedback>
                              {errors.ownerPercentage}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="merchantHomeAddress">
                              Home Address
                            </Label>
                            <Input
                              type="text"
                              name="merchantHomeAddress"
                              id="merchantHomeAddress"
                              placeholder="1234 Pasadena Street"
                              autoComplete="given-name"
                              valid={!errors.merchantHomeAddress}
                              invalid={
                                touched.merchantHomeAddress &&
                                !!errors.merchantHomeAddress
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantHomeAddress}
                            />
                            <FormFeedback>
                              {errors.merchantHomeAddress}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="merchantCity">City</Label>
                            <Input
                              type="text"
                              name="merchantCity"
                              id="merchantCity"
                              placeholder="Denver"
                              autoComplete="given-name"
                              valid={!errors.merchantCity}
                              invalid={
                                touched.merchantCity && !!errors.merchantCity
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantCity}
                            />
                            <FormFeedback>{errors.merchantCity}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="merchantState">State</Label>
                            <Input
                              type="text"
                              name="merchantState"
                              id="merchantState"
                              placeholder="Iowa"
                              autoComplete="given-name"
                              valid={!errors.merchantState}
                              invalid={
                                touched.merchantState && !!errors.merchantState
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantState}
                            />
                            <FormFeedback>{errors.merchantState}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="merchantZipCode">Zip Code</Label>
                            <Input
                              type="text"
                              name="merchantZipCode"
                              id="merchantZipCode"
                              placeholder="32846"
                              autoComplete="given-name"
                              valid={!errors.merchantZipCode}
                              invalid={
                                touched.merchantZipCode &&
                                !!errors.merchantZipCode
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantZipCode}
                            />
                            <FormFeedback>
                              {errors.merchantZipCode}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="merchantSocial">SSN:</Label>
                            <Input
                              type="text"
                              name="merchantSocial"
                              id="merchantSocial"
                              placeholder="###-##-####"
                              autoComplete="given-name"
                              valid={!errors.merchantSocial}
                              invalid={
                                touched.merchantSocial &&
                                !!errors.merchantSocial
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantSocial}
                            />
                            <FormFeedback>{errors.merchantSocial}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="merchantDob">DOB</Label>
                            <Input
                              type="text"
                              name="merchantDob"
                              id="merchantDob"
                              placeholder="06/23/1982"
                              autoComplete="given-name"
                              valid={!errors.merchantDob}
                              invalid={
                                touched.merchantDob && !!errors.merchantDob
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantDob}
                            />
                            <FormFeedback>{errors.merchantDob}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="merchantHomePhone">Home Number</Label>
                            <Input
                              type="text"
                              name="merchantHomePhone"
                              id="merchantHomePhone"
                              placeholder="###-###-####"
                              autoComplete="given-name"
                              valid={!errors.merchantHomePhone}
                              invalid={
                                touched.merchantHomePhone &&
                                !!errors.merchantHomePhone
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantHomePhone}
                            />
                            <FormFeedback>
                              {errors.merchantHomePhone}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="merchantWorkPhone">Work Number</Label>
                            <Input
                              type="text"
                              name="merchantWorkPhone"
                              id="merchantWorkPhone"
                              placeholder="###-###-####"
                              autoComplete="given-name"
                              valid={!errors.merchantWorkPhone}
                              invalid={
                                touched.merchantWorkPhone &&
                                !!errors.merchantWorkPhone
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merchantWorkPhone}
                            />
                            <FormFeedback>
                              {errors.merchantWorkPhone}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <h3>Partner Information</h3> <hr />
                      <FormGroup>
                        <Label for="partnerName">Partner Name</Label>
                        <Input
                          type="text"
                          name="partnerName"
                          id="partnerName"
                          placeholder="Corporate Name"
                          autoComplete="given-name"
                          valid={!errors.partnerName}
                          invalid={touched.partnerName && !!errors.partnerName}
                          autoFocus={false}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.partnerName}
                        />
                        <FormFeedback>{errors.partnerName}</FormFeedback>
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="partnerTitle">Title</Label>
                            <Input
                              type="text"
                              name="partnerTitle"
                              id="partnerTitle"
                              placeholder="CEO"
                              autoComplete="given-name"
                              valid={!errors.partnerTitle}
                              invalid={
                                touched.partnerTitle && !!errors.partnerTitle
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerTitle}
                            />
                            <FormFeedback>{errors.partnerTitle}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="partnerOwnershipPercentage">
                              Ownership %
                            </Label>
                            <Input
                              type="text"
                              name="partnerOwnershipPercentage"
                              id="partnerOwnershipPercentage"
                              placeholder="51%"
                              autoComplete="given-name"
                              valid={!errors.partnerOwnershipPercentage}
                              invalid={
                                touched.partnerOwnershipPercentage &&
                                !!errors.partnerOwnershipPercentage
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerOwnershipPercentage}
                            />
                            <FormFeedback>
                              {errors.partnerOwnershipPercentage}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="partnerHomeAddress">Home Address</Label>
                            <Input
                              type="text"
                              name="partnerHomeAddress"
                              id="partnerHomeAddress"
                              placeholder="1234 Pasadena Street"
                              autoComplete="given-name"
                              valid={!errors.partnerHomeAddress}
                              invalid={
                                touched.partnerHomeAddress &&
                                !!errors.partnerHomeAddress
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerHomeAddress}
                            />
                            <FormFeedback>
                              {errors.partnerHomeAddress}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="partnerCity">City</Label>
                            <Input
                              type="text"
                              name="partnerCity"
                              id="partnerCity"
                              placeholder="Denver"
                              autoComplete="given-name"
                              valid={!errors.partnerCity}
                              invalid={
                                touched.partnerCity && !!errors.partnerCity
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerCity}
                            />
                            <FormFeedback>{errors.partnerCity}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="partnerState">State</Label>
                            <Input
                              type="text"
                              name="partnerState"
                              id="partnerState"
                              placeholder="Iowa"
                              autoComplete="given-name"
                              valid={!errors.partnerState}
                              invalid={
                                touched.partnerState && !!errors.partnerState
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerState}
                            />
                            <FormFeedback>{errors.partnerState}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="partnerZipCode">Zip Code</Label>
                            <Input
                              type="text"
                              name="partnerZipCode"
                              id="partnerZipCode"
                              placeholder="32846"
                              autoComplete="given-name"
                              valid={!errors.partnerZipCode}
                              invalid={
                                touched.partnerZipCode &&
                                !!errors.partnerZipCode
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerZipCode}
                            />
                            <FormFeedback>{errors.partnerZipCode}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="partnerSocial">SSN:</Label>
                            <Input
                              type="text"
                              name="partnerSocial"
                              id="partnerSocial"
                              placeholder="###-##-####"
                              autoComplete="given-name"
                              valid={!errors.partnerSocial}
                              invalid={
                                touched.partnerSocial && !!errors.partnerSocial
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerSocial}
                            />
                            <FormFeedback>{errors.partnerSocial}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="partnerDob">DOB</Label>
                            <Input
                              type="text"
                              name="partnerDob"
                              id="partnerDob"
                              placeholder="06/23/1982"
                              autoComplete="given-name"
                              valid={!errors.partnerDob}
                              invalid={
                                touched.partnerDob && !!errors.partnerDob
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerDob}
                            />
                            <FormFeedback>{errors.partnerDob}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="partnerHomePhone">Home Number</Label>
                            <Input
                              type="text"
                              name="partnerHomePhone"
                              id="partnerHomePhone"
                              placeholder="###-###-####"
                              autoComplete="given-name"
                              valid={!errors.partnerHomePhone}
                              invalid={
                                touched.partnerHomePhone &&
                                !!errors.partnerHomePhone
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerHomePhone}
                            />
                            <FormFeedback>
                              {errors.partnerHomePhone}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="partnerWorkPhone">Work Number</Label>
                            <Input
                              type="text"
                              name="partnerWorkPhone"
                              id="partnerWorkPhone"
                              placeholder="###-###-####"
                              autoComplete="given-name"
                              valid={!errors.partnerWorkPhone}
                              invalid={
                                touched.partnerWorkPhone &&
                                !!errors.partnerWorkPhone
                              }
                              autoFocus={false}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.partnerWorkPhone}
                            />
                            <FormFeedback>
                              {errors.partnerWorkPhone}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <h3>Business Property Information (Optional)</h3> <hr />
                        <FormGroup>
                          <Label for="businessLandlordOrBank">
                            Business Landlord or Business Mortgage Bank.
                          </Label>
                          <Input
                            type="text"
                            name="businessLandlordOrBank"
                            id="businessLandlordOrBank"
                            placeholder="-"
                            autoComplete="given-name"
                            valid={!errors.businessLandlordOrBank}
                            invalid={
                              touched.businessLandlordOrBank &&
                              !!errors.businessLandlordOrBank
                            }
                            autoFocus={false}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.businessLandlordOrBank}
                          />
                          <FormFeedback>
                            {errors.businessLandlordOrBank}
                          </FormFeedback>
                        </FormGroup>
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="mortgageOrRentCurrent">
                                Is Business Current with Rent / Mortgage?
                              </Label>
                              <Input
                                type="select"
                                name="mortgageOrRentCurrent"
                                id="mortgageOrRentCurrent"
                                autoComplete="mortgageOrRentCurrent"
                                valid={!errors.mortgageOrRentCurrent}
                                invalid={
                                  touched.mortgageOrRentCurrent &&
                                  !!errors.mortgageOrRentCurrent
                                }
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mortgageOrRentCurrent}
                              >
                                <option />
                                <option>Yes</option>
                                <option>No</option>
                              </Input>
                              <FormFeedback>
                                {errors.mortgageOrRentCurrent}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="mortgageOrRentPastDue">
                                If not, how many months past due?
                              </Label>
                              <Input
                                type="text"
                                name="mortgageOrRentPastDue"
                                id="mortgageOrRentPastDue"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.mortgageOrRentPastDue}
                                invalid={
                                  touched.mortgageOrRentPastDue &&
                                  !!errors.mortgageOrRentPastDue
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mortgageOrRentPastDue}
                              />
                              <FormFeedback>
                                {errors.mortgageOrRentPastDue}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="businessRentOrMortgage">
                                Monthly Rent / Mortgage
                              </Label>
                              <Input
                                type="text"
                                name="businessRentOrMortgage"
                                id="businessRentOrMortgage"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.businessRentOrMortgage}
                                invalid={
                                  touched.businessRentOrMortgage &&
                                  !!errors.businessRentOrMortgage
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.businessRentOrMortgage}
                              />
                              <FormFeedback>
                                {errors.businessRentOrMortgage}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="businessPropertyPhone">
                                Phone Number
                              </Label>
                              <Input
                                type="text"
                                name="businessPropertyPhone"
                                id="businessPropertyPhone"
                                placeholder="###-###-####"
                                autoComplete="given-name"
                                valid={!errors.businessPropertyPhone}
                                invalid={
                                  touched.businessPropertyPhone &&
                                  !!errors.businessPropertyPhone
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.businessPropertyPhone}
                              />
                              <FormFeedback>
                                {errors.businessPropertyPhone}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>
                        <h3>Business Trade References (Optional)</h3>
                        <p>
                          If applicable please list at least 2 suppliers, no
                          personal references.
                        </p>
                        <hr />
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="referenceNameOne">
                                Business Name
                              </Label>
                              <Input
                                type="text"
                                name="referenceNameOne"
                                id="referenceNameOne"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.referenceNameOne}
                                invalid={
                                  touched.referenceNameOne &&
                                  !!errors.referenceNameOne
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.referenceNameOne}
                              />
                              <FormFeedback>
                                {errors.referenceNameOne}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="referenceContactOne">
                                Contact or Fax #
                              </Label>
                              <Input
                                type="text"
                                name="referenceContactOne"
                                id="referenceContactOne"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.referenceContactOne}
                                invalid={
                                  touched.referenceContactOne &&
                                  !!errors.referenceContactOne
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.referenceContactOne}
                              />
                              <FormFeedback>
                                {errors.referenceContactOne}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="referencePhoneOne">
                                Phone Number
                              </Label>
                              <Input
                                type="text"
                                name="referencePhoneOne"
                                id="referencePhoneOne"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.referencePhoneOne}
                                invalid={
                                  touched.referencePhoneOne &&
                                  !!errors.referencePhoneOne
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.referencePhoneOne}
                              />
                              <FormFeedback>
                                {errors.referencePhoneOne}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="referenceNameTwo">
                                Business Name
                              </Label>
                              <Input
                                type="text"
                                name="referenceNameTwo"
                                id="referenceNameTwo"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.referenceNameTwo}
                                invalid={
                                  touched.referenceNameTwo &&
                                  !!errors.referenceNameTwo
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.referenceNameTwo}
                              />
                              <FormFeedback>
                                {errors.referenceNameTwo}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="referenceContactTwo">
                                Contact or Fax #
                              </Label>
                              <Input
                                type="text"
                                name="referenceContactTwo"
                                id="referenceContactTwo"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.referenceContactTwo}
                                invalid={
                                  touched.referenceContactTwo &&
                                  !!errors.referenceContactTwo
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.referenceContactTwo}
                              />
                              <FormFeedback>
                                {errors.referenceContactTwo}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="referencePhoneTwo">
                                Phone Number
                              </Label>
                              <Input
                                type="text"
                                name="referencePhoneTwo"
                                id="referencePhoneTwo"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.referencePhoneTwo}
                                invalid={
                                  touched.referencePhoneTwo &&
                                  !!errors.referencePhoneTwo
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.referencePhoneTwo}
                              />
                              <FormFeedback>
                                {errors.referencePhoneTwo}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="accountDDA">Account DDA #</Label>
                              <Input
                                type="text"
                                name="accountDDA"
                                id="accountDDA"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.accountDDA}
                                invalid={
                                  touched.accountDDA && !!errors.accountDDA
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.accountDDA}
                              />
                              <FormFeedback>{errors.accountDDA}</FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="tradeRoutingNumber">Routing #</Label>
                              <Input
                                type="text"
                                name="tradeRoutingNumber"
                                id="tradeRoutingNumber"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.tradeRoutingNumber}
                                invalid={
                                  touched.tradeRoutingNumber &&
                                  !!errors.tradeRoutingNumber
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tradeRoutingNumber}
                              />
                              <FormFeedback>
                                {errors.tradeRoutingNumber}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label for="tradeBankNumber">Bank #</Label>
                              <Input
                                type="text"
                                name="tradeBankNumber"
                                id="tradeBankNumber"
                                placeholder="-"
                                autoComplete="given-name"
                                valid={!errors.tradeBankNumber}
                                invalid={
                                  touched.tradeBankNumber &&
                                  !!errors.tradeBankNumber
                                }
                                autoFocus={false}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tradeBankNumber}
                              />
                              <FormFeedback>
                                {errors.tradeBankNumber}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>
                        <CustomInput
                          type="checkbox"
                          id="accept"
                          label="I accept the terms of use"
                          required
                          valid={!errors.accept}
                          invalid={touched.accept && !!errors.accept}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <FormFeedback>{errors.accept}</FormFeedback>
                        </CustomInput>
                      </FormGroup>
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
