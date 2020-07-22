import React from 'react';
import { Text } from '../../typography';

type Props = {
  elementName?: string,
  defaultValue?: string,
  label?: string,
  handleChange?: () => void,
  placeholder?: string,
  isDisabled?: boolean,
  children: * => Node,
}
const Select = (props: Props) => {
  const {
    elementName, defaultValue, handleChange, placeholder, isDisabled, children, label,
  } = props;

  const renderSelect = () => (
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

  if (label) {
    return (
      <label htmlFor={elementName}>
        <Text size={14} bold isDisplayBlock>
          {label}
        </Text>
        {renderSelect()}
      </label>
    );
  }
  return renderSelect();
};

Select.defaultProps = {
  elementName: 'select-element',
  defaultValue: '',
  placeholder: '',
  label: '',
  isDisabled: false,
  handleChange: () => { },
};

export default Select;
