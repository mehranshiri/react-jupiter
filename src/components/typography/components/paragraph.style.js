import styled from 'styled-components';

export const Content = styled.span`
  font-weight: ${({ weight }) => (weight)};
  font-size: ${({ size }) => (`${size}px`)};
`;
