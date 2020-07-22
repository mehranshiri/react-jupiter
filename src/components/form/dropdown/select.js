import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import { StyledSelect, SelectButton } from './index.style';
import theme from '../theme';

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
    <ThemeProvider theme={theme}>
      <SelectButton disabled={isDisabled}>
        <StyledSelect
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
        </StyledSelect>
      </SelectButton>
    </ThemeProvider>
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
