import React from 'react';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import { Fieldset, RadioWrapper } from './index.style';

type Props = {
  children: * => Node,
  groupName?: string,
  label?: string,
  handleChange?: () => void,
  defaultCheckedValue?: string,
  isDisabled?: boolean,
  type?: 'horizental' | 'vertical',
};

const Radio = (props: Props) => {
  const {
    children, groupName, label, handleChange, defaultCheckedValue, isDisabled, type,
  } = props;
  const radioElements = React.Children.toArray(children);

  return (
    <Fieldset onChange={handleChange}>
      <GlobalStyle />
      {label && (
        <legend>
          <Text bold size={14}>
            {label}
          </Text>
        </legend>
      )}
      <RadioWrapper type={type}>
        {radioElements.map(
          (radioElement) => (
            isDisabled ? (
              React.cloneElement(radioElement, { groupName, defaultCheckedValue, isDisabled })
            ) : (
              React.cloneElement(radioElement, { groupName, defaultCheckedValue })
            )
          ),
        )}
      </RadioWrapper>
    </Fieldset>
  );
};

Radio.defaultProps = {
  groupName: 'radio-element',
  label: '',
  handleChange: () => { },
  defaultCheckedValue: '',
  isDisabled: false,
  type: 'horizental',
};
export default Radio;
