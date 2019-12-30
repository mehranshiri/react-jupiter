import styled from 'styled-components';

import './iconFont.scss';
import { getColorFromName } from '../utils/themeUtils';

export const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => `${theme.size[size]}px`};
  margin: ${({ theme, size }) => `0 ${theme.marginSize[size]}px 0 `};
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  width: max-content;
`;
