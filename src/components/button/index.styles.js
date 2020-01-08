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

  &[data-clickedButtonAction="${({ backgroundColor }) => backgroundColor}"] {
    animation: onClickMove${({ backgroundColor }) => backgroundColor} 0.5s;
    -webkit-animation: onClickMove${({ backgroundColor }) => backgroundColor} 0.5s;

    @-webkit-keyframes onClickMove${({ backgroundColor }) => backgroundColor} {
      0%   {box-shadow: none;}
      80%  {box-shadow: 0px 0px 0px 4px rgba(${({ backgroundColor }) => getRGBFromName(backgroundColor)},0.12);}
      90%  {box-shadow: 0px 0px 2px 4px rgba(${({ backgroundColor }) => getRGBFromName(backgroundColor)},0.12);}
      100% {box-shadow: 0px 0px 1px 4px rgba(${({ backgroundColor }) => getRGBFromName(backgroundColor)},0);}
    }
    @keyframes onClickMove${({ backgroundColor }) => backgroundColor} {
      0%   {box-shadow: none;}
      80%  {box-shadow: 0px 0px 0px 4px rgba(${({ backgroundColor }) => getRGBFromName(backgroundColor)},0.12);}
      90%  {box-shadow: 0px 0px 2px 4px rgba(${({ backgroundColor }) => getRGBFromName(backgroundColor)},0.12);}
      100% {box-shadow: 0px 0px 1px 4px rgba(${({ backgroundColor }) => getRGBFromName(backgroundColor)},0);}
    }
  }

  &[data-styletype="primary"] {
    border: none;
    background: ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)};
    
    &:hover { 
      transition: all 0.25s;
      background: ${({ theme, backgroundColor, disabled }) => (!disabled ? getHoverColorFromName(theme, backgroundColor) : getColorFromName(theme, backgroundColor))};
    }
    &:active {
      transition: all 0.25s;
      background: ${({ theme, backgroundColor, disabled }) => (!disabled ? getFocusColorFromName(theme, backgroundColor) : getColorFromName(theme, backgroundColor))};
    }
  }
  
  &[data-styletype="secondary"] {
    border: 1px solid ${({ theme, backgroundColor }) => getColorFromName(theme, backgroundColor)};
    background: transparent;

    &:hover { 
      border-color: ${({ theme, disabled, backgroundColor }) => (!disabled ? 'transparent' : getColorFromName(theme, backgroundColor))};
      transition: all 0.25s;
      background: ${({ theme, backgroundColor, disabled }) => (!disabled ? getColorFromName(theme, backgroundColor) : 'transparent')};
      * {
        transition: all 0.25s;
        color: ${({ theme, backgroundColor, disabled }) => (!disabled ? theme.colors.white : getColorFromName(theme, backgroundColor))};
      }
    }
    &:active {
      border-color: ${({ theme, disabled, backgroundColor }) => (!disabled ? 'transparent' : getColorFromName(theme, backgroundColor))};
      background: ${({ theme, backgroundColor, disabled }) => (!disabled ? getFocusColorFromName(theme, backgroundColor) : 'transparent')};
      * {
        transition: all 0.25s;
        color: ${({ theme, backgroundColor, disabled }) => (!disabled ? theme.colors.white : getColorFromName(theme, backgroundColor))};
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
