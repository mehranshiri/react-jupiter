import styled from 'styled-components';
import { getSizeOfHeading, getMarginOfHeading } from '../utils';

export const H1 = styled.h1`
  font-family: 'IranSharp';
  margin: ${({ theme, size }) => getMarginOfHeading(theme, size, 1)}
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 1)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 1) * theme.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.defaultColor}`)};
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-family: 'IranSharp';
  margin: ${({ theme, size }) => getMarginOfHeading(theme, size, 2)}
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 2)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 2) * theme.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.defaultColor}`)};
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-family: 'IranSharp';
  margin: ${({ theme, size }) => getMarginOfHeading(theme, size, 3)}
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 3)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 3) * theme.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.defaultColor}`)};
  font-weight: bold;
`;

export const H4 = styled.h4`
  font-family: 'IranSharp';
  margin: ${({ theme, size }) => getMarginOfHeading(theme, size, 4)}
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 4)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 4) * theme.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.defaultColor}`)};
  font-weight: bold;
`;

export const H5 = styled.h5`
  font-family: 'IranSharp';
  margin: ${({ theme, size }) => getMarginOfHeading(theme, size, 5)}
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 5)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 5) * theme.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.defaultColor}`)};
  font-weight: bold;
`;

export const H6 = styled.h6`
  font-family: 'IranSharp';
  margin: ${({ theme, size }) => getMarginOfHeading(theme, size, 6)}
  font-size: ${({ theme, size }) => `${getSizeOfHeading(theme, size, 6)}px;`}
  line-height: ${({ theme, size }) => `
    ${getSizeOfHeading(theme, size, 6) * theme.lineHeightRatio}px;
  `}
  color: ${({ theme }) => (`${theme.defaultColor}`)};
  font-weight: bold;
`;
