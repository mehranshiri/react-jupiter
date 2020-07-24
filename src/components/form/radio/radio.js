import React from 'react';

type Props = {
  children: * => Node,
  groupName?: string,
  label?: string,
  handleChange?: () => void,
  defaultCheckedValue?: string,
  isDisabled?: boolean,
};

const Radio = (props: Props) => {
  const {
    children, groupName, label, handleChange, defaultCheckedValue, isDisabled,
  } = props;
  const radioElements = React.Children.toArray(children);

  return (
    <fieldset onChange={handleChange}>
      {label && (
        <legend>
          {label}
        </legend>
      )}
      <div>
        {radioElements.map(
          (radioElement) => (
            isDisabled ? (
              React.cloneElement(radioElement, { groupName, defaultCheckedValue, isDisabled })
            ) : (
              React.cloneElement(radioElement, { groupName, defaultCheckedValue })
            )
          ),
        )}
      </div>
    </fieldset>
  );
};

Radio.defaultProps = {
  groupName: 'radio-element',
  label: '',
  handleChange: () => { },
  defaultCheckedValue: '',
  isDisabled: false,
};
export default Radio;
