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
      transition: all 0.25s;
      background: ${({ theme, backgroundColor }) => getHoverColorFromName(theme, backgroundColor)};
    }
    &:focus {
      transition: all 0.25s;
      background: ${({ theme, backgroundColor }) => getFocusColorFromName(theme, backgroundColor)};
    }
  }
  
  &.button-secondary {
    border: 1px solid ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)};
    background: white;

    &:hover { 
      border-color: transparent;
      transition: all 0.25s;
      background: ${({ theme, backgroundColor }) => getHoverColorFromName(theme, backgroundColor)};
      * {
        transition: all 0.25s;
        color: ${({ theme }) => theme.colors.white};
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
