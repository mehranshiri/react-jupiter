// @flow

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Icon from '../../icon';
import { Text } from '../../typography';
import GlobalStyle from '../../globalStyle';
import {
  Input,
  LabelContainer,
  DescriptionContainer,
  PasswordIcon,
  Label,
  ErrorMsgContainer,
} from './index.style';

type Props = {
  type?: 'text' | 'password',
  label?: string,
  uniqueName: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  description?: string,
  errorMessage?: string,
}

const TextInput = (props: Props) => {
  const {
    type,
    label,
    uniqueName,
    id,
    placeholder,
    disabled,
    description,
    errorMessage,
  } = props;
  const [value, setValue] = useState('');
  const [displayedPassword, setDisplayedPassword] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleDisplayPassword() {
    setDisplayedPassword(!displayedPassword);
  }

  function handleFocus(e) {
    e.target.setSelectionRange(0, 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Label htmlFor={id || `${type}-${uniqueName.split(' ').join('')}`} data-test="text-input">
        {label && (
          <LabelContainer bold size={14}>
            {label}
          </LabelContainer>
        )}
        {description && (
          <DescriptionContainer bold size={10} color="gray" data-test="text-input-description">
            {description}
          </DescriptionContainer>
        )}
        <Input
          id={id || `${type}-${uniqueName.split(' ').join('')}`}
          name={uniqueName}
          type={displayedPassword || type === 'text' ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={disabled}
        />
        {type === 'password' && (
          <PasswordIcon
            name={displayedPassword ? 'visibility-off' : 'visibility'}
            color={displayedPassword ? 'blue' : 'gray'}
            onClick={handleDisplayPassword}
          />
        )}
      </Label>
      {errorMessage && (
        <ErrorMsgContainer>
          <Icon name="error" color="red" size="sm" stickyRight />
          <Text bold size={10} color="red" data-test="error-message">
            {errorMessage}
          </Text>
        </ErrorMsgContainer>
      )}
    </ThemeProvider>
  );
};

TextInput.defaultProps = {
  type: 'text',
  label: null,
  id: null,
  placeholder: null,
  disabled: false,
  description: null,
  errorMessage: null,
};

export default TextInput;
