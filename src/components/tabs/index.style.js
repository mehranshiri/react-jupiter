import styled from 'styled-components';

export const TabHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  min-width: 140px;
  max-width: 210px;
  height: 35px;

  margin: 4px 0 4px 8px;
  padding: 0 8px;
  box-sizing: border-box;

  background: transparent;
  border: 1px solid ${({ theme }) => (theme.defaultColor)};
  border-radius: ${({ theme }) => (theme.borderRadius)}px;
  cursor: pointer;
  transition:  ${({ theme }) => (theme.transition)};

  span {
    color: ${({ theme }) => (theme.defaultColor)};
    transition:  ${({ theme }) => (theme.transition)};
  }

  &:hover, &.active {
    border-color: ${({ theme }) => (theme.secoundColor)};

    span {
      color: ${({ theme }) => (theme.secoundColor)};
    }
  }
`;
