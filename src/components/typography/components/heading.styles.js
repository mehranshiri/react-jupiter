import styled from 'styled-components';

import { getSizeOfHeading } from '../utils';
import '../../globalStyle.scss';

export const H1 = styled.h1`
  font-family: 'IranSharp';
  margin: 24px 0 8px;
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 1)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 1) * theme.typography.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.typography.baseColor}`)};
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-family: 'IranSharp';
  margin: 20px 0 8px;
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 2)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 2) * theme.typography.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.typography.baseColor}`)};
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-family: 'IranSharp';
  margin: 16px 0 8px;
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 3)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 3) * theme.typography.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.typography.baseColor}`)};
  font-weight: bold;
`;

export const H4 = styled.h4`
  font-family: 'IranSharp';
  margin: 12px 0 8px;
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 4)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 4) * theme.typography.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.typography.baseColor}`)};
  font-weight: bold;
`;

export const H5 = styled.h5`
  font-family: 'IranSharp';
  margin: 10px 0 8px;
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 5)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 5) * theme.typography.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.typography.baseColor}`)};
  font-weight: bold;
`;

export const H6 = styled.h6`
  font-family: 'IranSharp';
  margin: 10px 0 8px;
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 6)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 6) * theme.typography.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.typography.baseColor}`)};
  font-weight: bold;
`;
