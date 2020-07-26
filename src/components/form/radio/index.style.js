import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ type }) => (type === 'vertical' ? 'flex-direction: column;' : '')}
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  position: relative;
  top: 4px;
  
  border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s linear;

  &:hover {
    border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.hover)};
  }

  &:checked {
    border: 5px solid ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};
    width: 8px;
    height: 8px;
    background: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};

    &:after {
      background: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};
    }
  }

  &:after {
    content: '';
    display: block;
    background: ${({ disabled }) => (disabled ? 'white' : 'transparent')};
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    z-index: -1;
    top: -6px;
    right: -6px;
  }
`;
