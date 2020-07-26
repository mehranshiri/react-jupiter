import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import { Input } from './index.style';
import theme from '../theme';

type Props = {
  label: string,
  value: string,
  groupName: string,
  isDisabled?: boolean,
  isChecked?: boolean,
};
const RadioOption = (props: Props) => {
  const {
    label, value, isDisabled, isChecked, groupName,
  } = props;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={itemId}>
        <Input
          type="checkbox"
          id={itemId}
          name={groupName}
          value={value}
          defaultChecked={isChecked}
          disabled={isDisabled}
        />
        <Text size={14}>
          {label}
        </Text>
      </label>
    </ThemeProvider>
  );
};

RadioOption.defaultProps = {
  isDisabled: false,
  isChecked: false,
};

export default RadioOption;
