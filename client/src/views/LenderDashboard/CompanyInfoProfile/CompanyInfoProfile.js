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
import "./CompanyInfoProfile.scss";

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

class CompanyInfoProfile extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card className="profileCard">
          <CardHeader>
            <i className="icon-note" />
            <strong>StreamFluence LLC Profile</strong>

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
                              value={values.annualRevenue}
                              disabled
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
                              disabled
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
                              disabled
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
                          disabled
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
                          disabled
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
                          disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                          disabled
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
                              disabled
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
                              disabled
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
                          disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                          disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
                            disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
                                value={values.tradeBankNumber}
                              />
                              <FormFeedback>
                                {errors.tradeBankNumber}
                              </FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>
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

export default CompanyInfoProfile;
