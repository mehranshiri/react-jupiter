// @flow

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Input, LabelContainer, DescriptionContainer } from './text-input.style';

type Props = {
  type?: 'text' | 'password',
  label: string,
  uniqueName: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  description?: string,
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
  } = props;
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={id || `${type}-${uniqueName.split(' ').join('')}`} data-test="text-input">
        <LabelContainer bold size={14}>
          {label}
        </LabelContainer>
        {description && (
          <DescriptionContainer bold size={10} color="gray" data-test="text-input-description">
            {description}
          </DescriptionContainer>
        )}
        <Input
          id={id || `${type}-${uniqueName.split(' ').join('')}`}
          name={uniqueName}
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
  description: null,
};

export default TextInput;
