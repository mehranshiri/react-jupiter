import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { StyledSelect, SelectButton } from './index.style';

type Props = {
  htmlElementName?: string,
  defaultValue?: string,
  label?: string,
  handleChange?: () => void,
  placeholder?: string,
  isDisabled?: boolean,
  children: * => Node,
  errorMessage?: string,
  inputRef?: any,
}
const Select = (props: Props) => {
  const {
    htmlElementName, defaultValue, handleChange, placeholder, isDisabled,
    children, label, inputRef, errorMessage,
  } = props;

  function onChange(e) {
    handleChange(e.target.value);
  }

  const renderSelect = () => (
    <ThemeProvider theme={theme}>
      <SelectButton disabled={isDisabled}>
        <StyledSelect
          disabled={isDisabled}
          onChange={onChange}
          name={htmlElementName}
          defaultValue={placeholder || defaultValue}
          data-test="select"
          ref={inputRef}
        >
          {placeholder && (
            <option disabled>{placeholder}</option>
          )}
          {children}
        </StyledSelect>
      </SelectButton>
      <ErrorMsg errorMessage={errorMessage} />
    </ThemeProvider>
  );

  if (label) {
    return (
      <label htmlFor={htmlElementName}>
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
  htmlElementName: 'select-element',
  defaultValue: '',
  placeholder: '',
  label: '',
  isDisabled: false,
  handleChange: () => { },
  errorMessage: '',
  inputRef: null,
};

export default Select;
