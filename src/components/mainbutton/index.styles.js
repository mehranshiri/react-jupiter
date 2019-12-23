import styled from 'styled-components';

import '../iranSharpFont.scss';
import { getColorFromName, getHoverColorFromName, getFocusColorFromName } from '../utils/themeUtils';

// TODO: margin should be changed
// TODO: height should be added
export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => (theme.colors.white)};
  font-family: 'IranSharp';
  font-weight: bold;
  font-size: ${({ size, theme }) => (`${theme.size[size].font}px`)};

  width: ${({ isWide }) => (isWide ? '100%' : 'max-content')};
  min-width: ${({ size, theme }) => (`${theme.size[size].minWidth}px`)};

  border: none;
  padding: ${({ size, theme }) => theme.size[size].padding};
  margin: 4px;

  background: ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)}
  
  &:hover { 
    background: ${({ theme, backgroundColor }) => getHoverColorFromName(theme, backgroundColor)}
  }
  &:focus {
    background: ${({ theme, backgroundColor }) => getFocusColorFromName(theme, backgroundColor)}
  }

`;
