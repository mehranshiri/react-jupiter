import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  font-family: 'IranSharp';
  font-size: 14px;

  resize: ${({ resize }) => resize};
  min-height: ${({ minHeight }) => `${minHeight}px`};
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
  background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};

  &:hover {
    border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.hover)};
  }
  &:focus {
    border-color: ${({ theme }) => theme.borderColor.focus};
  }
`;

export default StyledTextarea;
