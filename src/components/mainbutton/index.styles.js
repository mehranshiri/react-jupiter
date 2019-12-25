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

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.25' : '1')};

  &.button-primary {
    border: none;
    background: ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)};
    
    &:hover { 
      transition: all 0.25s;
      background: ${({ theme, backgroundColor, disabled }) => (!disabled ? getHoverColorFromName(theme, backgroundColor) : getColorFromName(theme, backgroundColor))};
    }
    &:focus {
      transition: all 0.25s;
      background: ${({ theme, backgroundColor }) => getFocusColorFromName(theme, backgroundColor)};
    }
  }
  
  &.button-secondary {
    border: 1px solid ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)};
    background: transparent;

    &:hover { 
      border-color: ${({ theme, disabled, backgroundColor }) => (!disabled ? 'transparent' : getColorFromName(theme, backgroundColor))};
      transition: all 0.25s;
      background: ${({ theme, backgroundColor, disabled }) => (!disabled ? getHoverColorFromName(theme, backgroundColor) : 'transparent')};
      * {
        transition: all 0.25s;
        color: ${({ theme, backgroundColor, disabled }) => (!disabled ? theme.colors.white : getColorFromName(theme, backgroundColor))};
      }
    }
    &:focus {
      border-color: transparent;
      background: ${({ theme, backgroundColor }) => getFocusColorFromName(theme, backgroundColor)};
      * {
        transition: all 0.25s;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  
  &.button-tertiary {
    border: none;
    background: transparent;

    &:hover { 
      * {
        transition: all 0.25s;
        color: ${({ theme }) => theme.colors.darkBlue400};
      }
    }
    &:focus {
      * {
        transition: all 0.25s;
        color: ${({ theme }) => theme.colors.darkBlue800};
      }
    }

  }
`;

export const StyledIcon = styled(Icon)`
  padding-right: 0;
`;
