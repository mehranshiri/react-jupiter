import styled from 'styled-components';

import { getColorFromName, getHoverColorFromName, getFocusColorFromName } from '../utils/themeUtils';

// TODO: margin should be changed
// TODO: height should be added
export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

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
