import styled from 'styled-components';

import './iconFont.scss';
import { getColorFromName } from '../utils/themeUtils';

export const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => `${theme.size[size]}px`};
  color: ${({ theme, color }) => getColorFromName(theme, color)};
`;

export const IconWrapper = styled.div`
  padding: ${({ theme, size }) => `${theme.paddingSize[size]}px`};
  width: max-content;
`;
