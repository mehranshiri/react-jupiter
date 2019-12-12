import styled from 'styled-components';

import '../../globalStyle.scss';

export const Content = styled.p`
  margin: 8px 0;
  font-family: 'IranSharp';
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ theme, size }) => `${size * theme.lineHeightRatio}px`};
  color: ${({ theme }) => theme.defaultColor};
`;
