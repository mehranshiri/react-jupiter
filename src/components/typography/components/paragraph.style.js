import styled from 'styled-components';

export const Content = styled.p`
  margin: 8px 0;
  font-family: 'IranSharp';
  font-size: ${({ theme, size }) => (size ? `${size}px` : `${theme.typography.baseSize}px`)};
  line-height: ${({ theme, size }) => (
    size
      ? `${size * theme.typography.lineHeightRatio}px`
      : `${theme.typography.baseSize * theme.typography.lineHeightRatio}px`
  )};
  color: ${({ theme }) => theme.typography.baseColor};
`;
