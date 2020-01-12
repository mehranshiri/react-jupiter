import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../icon';
import { getRGBFromName } from './utils';
import { getColorFromName, getHoverColorFromName, getFocusColorFromName } from '../utils/themeUtils';

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ wide }) => (wide ? '100%' : 'max-content')};
  min-width: ${({ size, theme }) => (`${theme.size[size].minWidth}px`)};
  min-height: ${({ size, theme }) => (`${theme.size[size].height}px`)};

  margin: ${({ size, theme }) => (`${theme.size[size].margin}px`)};
  padding: ${({ size, theme }) => theme.size[size].padding};
  box-sizing: border-box;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.25' : '1')};
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};

  &[data-clickedButtonAction="${({ mainColor }) => mainColor}"] {
    animation: onClickMove${({ mainColor }) => mainColor} 0.5s;
    -webkit-animation: onClickMove${({ mainColor }) => mainColor} 0.5s;

    @-webkit-keyframes onClickMove${({ mainColor }) => mainColor} {
      0%   {box-shadow: none;}
      80%  {box-shadow: 0px 0px 0px 4px rgba(${({ mainColor }) => getRGBFromName(mainColor)},0.12);}
      90%  {box-shadow: 0px 0px 2px 4px rgba(${({ mainColor }) => getRGBFromName(mainColor)},0.12);}
      100% {box-shadow: 0px 0px 1px 4px rgba(${({ mainColor }) => getRGBFromName(mainColor)},0);}
    }
    @keyframes onClickMove${({ mainColor }) => mainColor} {
      0%   {box-shadow: none;}
      80%  {box-shadow: 0px 0px 0px 4px rgba(${({ mainColor }) => getRGBFromName(mainColor)},0.12);}
      90%  {box-shadow: 0px 0px 2px 4px rgba(${({ mainColor }) => getRGBFromName(mainColor)},0.12);}
      100% {box-shadow: 0px 0px 1px 4px rgba(${({ mainColor }) => getRGBFromName(mainColor)},0);}
    }
  }

  &[data-styletype="primary"] {
    border: none;
    background: ${({ theme, mainColor }) => getColorFromName(theme, mainColor)};
    
    &:hover { 
      transition: all 0.25s;
      background: ${({ theme, mainColor, disabled }) => (!disabled ? getHoverColorFromName(theme, mainColor) : getColorFromName(theme, mainColor))};
    }
    &:active {
      transition: all 0.25s;
      background: ${({ theme, mainColor, disabled }) => (!disabled ? getFocusColorFromName(theme, mainColor) : getColorFromName(theme, mainColor))};
    }
  }
  
  &[data-styletype="secondary"] {
    border: 1px solid ${({ theme, mainColor }) => getColorFromName(theme, mainColor)};
    background: transparent;

    &:hover { 
      border-color: ${({ theme, disabled, mainColor }) => (!disabled ? 'transparent' : getColorFromName(theme, mainColor))};
      transition: all 0.25s;
      background: ${({ theme, mainColor, disabled }) => (!disabled ? getColorFromName(theme, mainColor) : 'transparent')};
      * {
        transition: all 0.25s;
        color: ${({ theme, mainColor, disabled }) => (!disabled ? theme.colors.white : getColorFromName(theme, mainColor))};
      }
    }
    &:active {
      border-color: ${({ theme, disabled, mainColor }) => (!disabled ? 'transparent' : getColorFromName(theme, mainColor))};
      background: ${({ theme, mainColor, disabled }) => (!disabled ? getFocusColorFromName(theme, mainColor) : 'transparent')};
      * {
        transition: all 0.25s;
        color: ${({ theme, mainColor, disabled }) => (!disabled ? theme.colors.white : getColorFromName(theme, mainColor))};
      }
    }
  }
  
  &[data-styletype="tertiary"] {
    border: none;
    background: transparent;

    &:hover { 
      * {
        transition: all 0.25s;
        color: ${({ theme }) => theme.colors.darkBlue400};
      }
    }
    &:active {
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

export const ExternalLink = styled.a`
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  &:visited {
    color: ${({ theme, color }) => getColorFromName(theme, color)};
    text-decoration: none;
  }
`;

export const InternalLink = styled(Link)`
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  text-decoration: none;
`;
