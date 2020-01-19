import styled from 'styled-components';

import './iconFont.scss';
import { getColorFromName } from '../utils/theme';

export const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => `${theme.size[size]}px`};
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  margin: ${({
    theme, size, stickyLeft, stickyRight,
  }) => `0 ${stickyRight ? 0 : theme.marginSize[size]}px 0 ${stickyLeft ? 0 : theme.marginSize[size]}px`};
`;
