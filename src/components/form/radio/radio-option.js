import React from 'react';

type Props = {
  label: string,
  value: string,
  groupName: string,
  isDisabled?: boolean,
  defaultCheckedValue?: string,
};
const RadioOption = (props: Props) => {
  const {
    label, value, isDisabled, defaultCheckedValue, groupName,
  } = props;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <label htmlFor={itemId}>
      <input
        type="radio"
        id={itemId}
        name={groupName}
        value={value}
        defaultChecked={defaultCheckedValue === value}
        disabled={isDisabled}
      />
      <span>
        {label}
      </span>
    </label>
  );
};

RadioOption.defaultProps = {
  isDisabled: false,
  defaultCheckedValue: '',
};

export default RadioOption;
