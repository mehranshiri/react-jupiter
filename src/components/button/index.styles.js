import styled from 'styled-components';

export const ButtonContainer = styled.button`
  border: 1px solid blue;
  border-radius: ${({ theme, rounded }) => (rounded ? `${theme.button.borderRadius}px` : 0)};
`;
