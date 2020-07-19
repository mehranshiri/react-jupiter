// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import { Text } from '../typography';
import {
  BaseButton,
  StyledIcon,
  ExternalLink,
  InternalLink,
} from './index.styles';
import setFontColor from './utils';
import theme from './theme';

type Props = {
  htmlType?: 'button' | 'submit' | 'reset',
  children: string,
  icon?: string,
  wide?: boolean,
  disabled?: boolean,
  size?: 'sm' | 'md' | 'lg',
  mainColor?: 'red' | 'green' | 'yellow' | 'darkBlue' | 'blue',
  styleType?: 'primary' | 'secondary' | 'tertiary',
  linkTo?: string,
  linkTarget?: '_self' | '_blank',
  isLoading?: boolean,
  renderLink?: * => Node,
}

const Button = (props: Props) => {
  const {
    htmlType,
    icon,
    children,
    wide,
    disabled,
    size,
    mainColor,
    styleType,
    linkTo,
    linkTarget,
    isLoading,
    renderLink,
    ...rest
  } = props;
  const fontColor = setFontColor(styleType, mainColor);

  function RenderButtonContext() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseButton
          data-test="button"
          type={htmlType}
          wide={wide}
          size={size}
          mainColor={mainColor}
          disabled={disabled || isLoading}
          data-styletype={styleType}
          {...rest}
        >
          {
            icon
              && (
                <StyledIcon
                  name={icon}
                  size={size}
                  color={fontColor}
                />
              )
          }
          <Text
            size={theme.size[size].font}
            color={fontColor}
            bold
          >
            {isLoading ? 'صبر کنید...' : children}
          </Text>
        </BaseButton>
      </ThemeProvider>
    );
  }

  if ((linkTo || renderLink) && !disabled) {
    if (renderLink) {
      return (
        <InternalLink>
          {renderLink(<RenderButtonContext />)}
        </InternalLink>
      );
    }

    return (
      <ExternalLink href={linkTo} target={linkTarget}>
        <RenderButtonContext />
      </ExternalLink>
    );
  }

  return (
    <RenderButtonContext />
  );
};

Button.defaultProps = {
  htmlType: 'submit',
  icon: null,
  wide: false,
  disabled: false,
  size: 'md',
  mainColor: 'darkBlue',
  styleType: 'primary',
  linkTo: null,
  linkTarget: '_self',
  isLoading: false,
  renderLink: null,
};

export default Button;
