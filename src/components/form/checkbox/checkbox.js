import React from 'react';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { Fieldset, CheckboxWrapper } from './index.style';

type Props = {
  children: * => Node,
  groupName?: string,
  label?: string,
  handleChange?: () => void,
  isDisabled?: boolean,
  type?: 'horizontal' | 'vertical',
  errorMessage?: string,
};

const Checkbox = (props: Props) => {
  const {
    children, groupName, label, handleChange, isDisabled, type, errorMessage,
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
      <CheckboxWrapper type={type}>
        {radioElements.map(
          (radioElement) => (
            isDisabled ? (
              React.cloneElement(radioElement, { groupName, isDisabled })
            ) : (
              React.cloneElement(radioElement, { groupName })
            )
          ),
        )}
      </CheckboxWrapper>
      <ErrorMsg errorMessage={errorMessage} />
    </Fieldset>
  );
};

Checkbox.defaultProps = {
  groupName: 'radio-element',
  label: '',
  handleChange: () => { },
  isDisabled: false,
  type: 'horizontal',
  errorMessage: '',
};
export default Checkbox;
