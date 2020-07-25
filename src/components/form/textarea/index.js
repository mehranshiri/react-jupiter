import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import theme from '../theme';
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
};

const Textarea = (props: Props) => {
  const {
    htmlElementName, label, isDisabled, initialVal, placeholder, resize, minHeight, handleChange,
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
      >
        {initialVal}
      </StyledTextarea>
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
};

export default Textarea;
