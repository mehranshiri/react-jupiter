import styled from 'styled-components';

const headingColorBasedOnType = (theme, type) => {
  switch (type) {
    case 'danger':
      return 'red';
    case 'success':
      return 'green';
    default:
    case 'default':
      return 'black';
  }
};

export const H1 = styled.h2`
  margin: 24px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h1Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h1Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
  font-weight: bold;
`;

export const H2 = styled.h2`
  margin: 20px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h2Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h2Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
  font-weight: bold;
`;

export const H3 = styled.h3`
  margin: 16px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h3Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h3Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
  font-weight: bold;
`;

export const H4 = styled.h4`
  margin: 12px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h4Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h4Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
  font-weight: bold;
`;

export const H5 = styled.h5`
  margin: 10px 0 8px;
  font-size: ${({ theme }) => (`${theme.typography.h5Size}px`)};
  line-height: ${({ theme }) => (`${theme.typography.h5Size * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
  font-weight: bold;
`;
