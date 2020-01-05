import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export const TemplateContainer = styled.section`
  border-radius: ${({ theme }) => (`${theme.borderRadius.low}px`)};
  width: 100%;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px` : '')};
  box-shadow: ${({ theme, level }) => (
    `0 0 ${theme.shadows[level].blur}px ${theme.shadows[level].spread}px rgba(0, 0, 0, ${theme.shadows[level].opacity})`
  )};
  text-decoration: none;
  transition: all .2s ease-out;

  &:hover {
    ${({ theme, level, hoverToLevel }) => (
    hoverToLevel > level
      ? `box-shadow: 0 0 ${theme.shadows[hoverToLevel].blur}px ${theme.shadows[hoverToLevel].spread}px rgba(0, 0, 0, ${theme.shadows[hoverToLevel].opacity})`
      : ''
  )};
  }
`;
