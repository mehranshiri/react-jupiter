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

  border: 1px solid ${({ theme }) => theme.borderColor.normal};
  transition: background 0.5s linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
  
  &:hover {
    border: 1px solid ${({ theme }) => theme.borderColor.hover};
  }

  &:checked {
    border: 5px solid white;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.borderColor.focus};

    &:after {
      display: block;
    }
  }

  &:after {
    content: '';
    display: none;
    background: ${({ theme }) => theme.borderColor.focus};
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    z-index: -1;
    top: -6px;
    right: -6px;
  }

`;
