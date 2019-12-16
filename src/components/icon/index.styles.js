import styled from 'styled-components';

import '../globalStyle.scss';

export const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => `${theme.size[size]}px`};
  padding: ${({ theme, size }) => `${theme.paddingSize[size]}px`};
  color: ${({ theme, color }) => `${theme.color[color]}`};
  box-sizing: border-box;
  width: max-content;
`;
