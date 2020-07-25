import React from 'react';
import StyledTextarea from './index.style';

type Props = {
  htmlElementName?: string,
  label?: string,
  isDisabled?: Boolean,
  initialVal?: string,
  placeholder?: string,
  resize?: 'horizontal' | 'vertical' | 'none',
  minHeight?: number,
  handleChange?: () => void,
};

const Textarea = (props: Props) => {
  const {
    htmlElementName, label, isDisabled, initialVal, placeholder, resize, minHeight, handleChange,
  } = props;

  return (
    <>
      {label && (
        <label htmlFor={htmlElementName}>
          {label}
        </label>
      )}

      <StyledTextarea
        name={htmlElementName}
        disabled={isDisabled}
        placeholder={placeholder}
        resize={resize}
        minHeight={minHeight}
        onChange={handleChange}
      >
        {initialVal}
      </StyledTextarea>
    </>
  );
};

Textarea.defaultProps = {
  htmlElementName: 'textarea',
  label: '',
  isDisabled: false,
  initialVal: '',
  placeholder: '',
  resize: 'none',
  minHeight: 120,
  handleChange: () => { },
};

export default Textarea;
