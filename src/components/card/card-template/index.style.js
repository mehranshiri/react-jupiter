import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export const TemplateContainer = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  border-radius: ${({ theme }) => (`${theme.borderRadius.low}px`)};
  overflow: hidden;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px` : '')};
  box-shadow: ${({ theme, level }) => (
    `0 0 ${theme.shadows[level].blur}px ${theme.shadows[level].spread}px rgba(0, 0, 0, ${theme.shadows[level].opacity})`
  )};
  text-decoration: none;
  transition: ${({ theme }) => (`all ${theme.animation.time}s ${theme.animation.method}`)};

  &:hover {
    ${({ theme, level, hoverToLevel }) => (
    hoverToLevel > level
      ? `box-shadow: 0 0 ${theme.shadows[hoverToLevel].blur}px ${theme.shadows[hoverToLevel].spread}px rgba(0, 0, 0, ${theme.shadows[hoverToLevel].opacity})`
      : ''
  )};
  }
`;
