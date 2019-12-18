import styled from 'styled-components';

import './iconFont.scss';

export const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => `${theme.size[size]}px`};
  margin: ${({ theme, size }) => `${theme.paddingSize[size]}px`};
  color: ${({ theme, color }) => `${theme.color[color]}`};
  width: max-content;
`;
