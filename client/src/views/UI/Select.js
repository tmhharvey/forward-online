/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';

const Select = ({ name, value, onChange, options, id, className, placeholder }) => {
  if (!options || options.length === 0) return null;
  let items = '';
  if (typeof options[0] === 'string') {
    items = options.map((item, index) => <option key={index} value={item}>{ item }</option>);
  } else if (typeof options[0] === 'object') {
    items = options.map((option, index) => {
      const disabled = option.disabled ? 'disabled' : '';
      return (
        <option
          key={index}
          value={option.value}
          disabled={disabled}
          defaultValue={option.selected ? 'selected' : ''}
        >{ option.text }
        </option>
      );
    });
  }
  return (
    <select
      className={className ? `form-control ${className}` : 'form-control'}
      name={name}
      value={value}
      onChange={onChange}
      paceholder={placeholder}
      id={id}
    >
      { items }
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Select;
