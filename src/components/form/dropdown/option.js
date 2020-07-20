import React from 'react';

type Props = {
  label: string,
  value: string,
  isDisabled?: boolean,
}
const SelectOption = (props: Props) => {
  const { label, value, isDisabled } = props;

  return (
    <option
      disabled={isDisabled}
      value={value}
      data-test="select-option"
    >
      {label}
    </option>
  );
};

SelectOption.defaultProps = {
  isDisabled: false,
};

export default SelectOption;
