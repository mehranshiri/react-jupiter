import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import StyledTextarea from './index.style';

type Props = {
  htmlElementName?: string,
  label?: string,
  isDisabled?: Boolean,
  initialVal?: string,
  placeholder?: string,
  resize?: 'horizontal' | 'vertical' | 'none',
  minHeight?: number,
  handleChange?: () => void,
  errorMessage?: string,
  inputRef?: any,
};

const Textarea = (props: Props) => {
  const {
    htmlElementName, label, isDisabled, initialVal, placeholder,
    resize, minHeight, handleChange, errorMessage, inputRef,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {label && (
        <label htmlFor={htmlElementName}>
          <Text bold size={14}>
            {label}
          </Text>
        </label>
      )}

      <StyledTextarea
        name={htmlElementName}
        disabled={isDisabled}
        placeholder={placeholder}
        resize={resize}
        minHeight={minHeight}
        onChange={handleChange}
        ref={inputRef}
      >
        {initialVal}
      </StyledTextarea>
      <ErrorMsg errorMessage={errorMessage} />
    </ThemeProvider>
  );
};

Textarea.defaultProps = {
  htmlElementName: 'textarea',
  label: '',
  isDisabled: false,
  initialVal: '',
  placeholder: '',
  resize: 'none',
  minHeight: 120,
  handleChange: () => { },
  errorMessage: '',
  inputRef: null,
};

export default Textarea;
