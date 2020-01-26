// @flow

import React, { useState } from 'react';

type Props = {
  type?: 'text' | 'password',
  label: string,
  name: string,
  id?: string,
  placeholder?: string
}

const TextInput = (props: Props) => {
  const {
    type,
    label,
    name,
    id,
    placeholder,
  } = props;
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <label htmlFor={id || `${type}-${name.split(' ').join('')}`} data-test="text-input">
      {label}
      <input
        id={id || `${type}-${name.split(' ').join('')}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

TextInput.defaultProps = {
  type: 'text',
  id: null,
  placeholder: null,
};

export default TextInput;
