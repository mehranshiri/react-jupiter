// @flow

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Input, LabelContainer } from './text-input.style';

type Props = {
  type?: 'text' | 'password',
  label: string,
  name: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
}

const TextInput = (props: Props) => {
  const {
    type,
    label,
    name,
    id,
    placeholder,
    disabled,
  } = props;
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={id || `${type}-${name.split(' ').join('')}-${label.split(' ').join('')}`} data-test="text-input">
        <LabelContainer bold size={14}>
          {label}
        </LabelContainer>
        <Input
          id={id || `${type}-${name.split(' ').join('')}-${label.split(' ').join('')}`}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </label>
    </ThemeProvider>
  );
};

TextInput.defaultProps = {
  type: 'text',
  id: null,
  placeholder: null,
  disabled: false,
};

export default TextInput;
