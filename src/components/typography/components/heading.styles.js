import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'IranSharp';
  margin: 24px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h1Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h1Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme }) => (`${theme.colors.riverBedDark}`)};
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-family: 'IranSharp';
  margin: 20px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h2Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h2Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme }) => (`${theme.colors.riverBedDark}`)};
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-family: 'IranSharp';
  margin: 16px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h3Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h3Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme }) => (`${theme.colors.riverBedDark}`)};
  font-weight: bold;
`;

export const H4 = styled.h4`
  font-family: 'IranSharp';
  margin: 12px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h4Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h4Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme }) => (`${theme.colors.riverBedDark}`)};
  font-weight: bold;
`;

export const H5 = styled.h5`
  font-family: 'IranSharp';
  margin: 10px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h5Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h5Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme }) => (`${theme.colors.riverBedDark}`)};
  font-weight: bold;
`;
