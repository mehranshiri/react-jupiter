import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ type }) => (type === 'vertical' ? 'flex-direction: column;' : '')}
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 16px;
  height: 16px;

  border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
  background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 10px;
  
  &:hover {
    border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.hover)};
  }

  &:checked {
    border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};
    
    &:after {
      border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};
    }
  }

  &:after {
    content: '';
    display: block;

    height: 8px;
    width: 5px;
    position: absolute;
    right: 5px;
    top: 2px;

    transition: 0.2s all linear;

    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }
`;
