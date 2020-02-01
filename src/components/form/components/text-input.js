// @flow

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import {
  Input,
  LabelContainer,
  DescriptionContainer,
  PasswordIcon,
  Label,
} from './text-input.style';

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
      <Label htmlFor={id || `${type}-${uniqueName.split(' ').join('')}`} data-test="text-input">
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
