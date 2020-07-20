import React from 'react';

type Props = {
  elementName?: string,
  defaultValue?: string,
  handleChange?: () => void,
  placeholder?: string,
  isDisabled?: boolean,
  children: * => Node,
}
const Select = (props: Props) => {
  const {
    elementName, defaultValue, handleChange, placeholder, isDisabled, children,
  } = props;

  return (
    <select
      disabled={isDisabled}
      onBlur={handleChange}
      name={elementName}
      defaultValue={placeholder || defaultValue}
      data-test="select"
    >
      {placeholder && (
        <option disabled>{placeholder}</option>
      )}
      {children}
    </select>
  );
};

Select.defaultProps = {
  elementName: 'select-element',
  defaultValue: '',
  placeholder: '',
  isDisabled: false,
  handleChange: () => { },
};

export default Select;
