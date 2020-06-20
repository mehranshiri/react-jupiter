import styled from 'styled-components';

import './iconFont.scss';
import { getColorFromName } from '../utils/theme';

const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => `${theme.size[size]}px`};
  color: ${({ theme, IconColor }) => getColorFromName(theme, IconColor)};
  margin: ${({
    theme, size, stickyLeft, stickyRight,
  }) => `0 ${stickyRight ? 0 : theme.marginSize[size]}px 0 ${stickyLeft ? 0 : theme.marginSize[size]}px`};
`;

export default StyledIcon;
