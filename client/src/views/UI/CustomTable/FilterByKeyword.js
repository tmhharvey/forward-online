import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup } from "react-bootstrap";

const FilterByKeyword = ({ filterByKeyword, handler }) => (
  <Form
    onSubmit={e => {
      e.preventDefault();
    }}
    className="search-form m-b-1"
    inline
  >
    <FormGroup>
      <Form.Label htmlFor="search">Search: </Form.Label>
      <Form.Control
        type="text"
        className="search-bar form-control-sm"
        name="search"
        onChange={filterByKeyword || handler}
      />
    </FormGroup>
  </Form>
);

FilterByKeyword.propTypes = {
  filterByKeyword: PropTypes.func,
  handler: PropTypes.func
};

export default FilterByKeyword;
