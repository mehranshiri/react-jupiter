import styled from 'styled-components';

export const TitleLarge = styled.h2`
  margin: 12px 0 8px;
  font-size: 18px;
  line-height: ${({ theme }) => (`${18 * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme }) => (`${theme.colors.gray800}`)};
  font-weight: bold;
`;

export const TitleSmall = styled.h3`
  margin: 10px 0 8px;
  font-size: 14px;
  line-height: ${({ theme }) => (`${14 * theme.typography.headingLineHeightRatio}px`)};
  color: ${({ theme }) => (`${theme.colors.gray800}`)};
  font-weight: bold;
`;
