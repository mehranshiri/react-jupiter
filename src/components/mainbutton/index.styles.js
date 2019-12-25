import styled from 'styled-components';

import Icon from '../icon';
import { getColorFromName, getHoverColorFromName, getFocusColorFromName } from '../utils/themeUtils';

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ isWide }) => (isWide ? '100%' : 'max-content')};
  min-width: ${({ size, theme }) => (`${theme.size[size].minWidth}px`)};
  min-height: ${({ size, theme }) => (`${theme.size[size].height}px`)};

  margin: ${({ size, theme }) => (`${theme.size[size].margin}px`)};
  padding: ${({ size, theme }) => theme.size[size].padding};
  box-sizing: border-box;

  &.button-primary {
    border: none;
    background: ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)};

    &:hover { 
      background: ${({ theme, backgroundColor }) => getHoverColorFromName(theme, backgroundColor)};
    }
    &:focus {
      background: ${({ theme, backgroundColor }) => getFocusColorFromName(theme, backgroundColor)};
    }
  }
  
  &.button-secondary {
    border: 1px solid ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)};
    background: white;

    &:hover { 
      border-color: transparent;
      background: ${({ theme, backgroundColor }) => getHoverColorFromName(theme, backgroundColor)};
    }
    &:focus {
      border-color: transparent;
      background: ${({ theme, backgroundColor }) => getFocusColorFromName(theme, backgroundColor)};
    }
  }
  
  &.button-tertiary {
    border: none;
    background: transparent;
  }
`;

export const StyledIcon = styled(Icon)`
  padding-right: 0;
`;
