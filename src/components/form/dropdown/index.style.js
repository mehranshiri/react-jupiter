import styled from 'styled-components';

export const SelectButton = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    position: absolute;
    left: 15px;
    top: 11px;
    border: solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    pointer-events: none;
  }

  &:before {
    content: "";
    display: block;
    width: 37px;
    position: absolute;
    margin-top: 2px;
    top: 0;
    bottom: 1px;
    left: 1px;
    border-right: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
    background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select`
  font-family: 'IranSharp';
  font-weight: bold;
  font-size: 12px;
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  border: solid 1px ${({ disabled, theme }) => (disabled ? 'transparent' : theme.borderColor.normal)};
  padding: 4px;
  box-sizing: border-box;
  width: 100%;
  background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};
  ${({ disabled, theme }) => (disabled ? `color: ${theme.disabled.color};` : '')}
  ${({ disabled, theme }) => (disabled ? `color: ${theme.disabled.color};` : '')}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    border-color: ${({ disabled, theme }) => (disabled ? 'transparent' : theme.borderColor.hover)};
  }

  &:focus {
    border-color: ${({ theme }) => theme.borderColor.focus};
  }
`;
