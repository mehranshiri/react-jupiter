import styled from 'styled-components';

import '../../iranSharpFont.scss';

export const Content = styled.p`
  margin: 8px 0;
  font-family: 'IranSharp';
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ theme, size }) => `${size * theme.lineHeightRatio}px`};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
