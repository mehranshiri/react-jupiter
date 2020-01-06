import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Text } from '../typography';
import {
  BaseButton,
  StyledIcon,
  ExternalLink,
  InternalLink,
} from './index.styles';
import { setFontColor } from './utils';
import theme from './theme';

const Button = (props) => {
  const {
    htmlType,
    icon,
    children,
    wide,
    disabled,
    size,
    backgroundColor,
    styleType,
    linkTo,
    linkTarget,
    linkType,
  } = props;
  const fontColor = setFontColor(styleType, backgroundColor);

  function RenderButtonContext() {
    return (
      <ThemeProvider theme={theme}>
        <BaseButton
          data-test="button"
          type={htmlType}
          wide={wide}
          size={size}
          backgroundColor={backgroundColor}
          disabled={disabled}
          data-styletype={styleType}
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
            size={theme.size[size]}
            color={fontColor}
            bold
          >
            {children}
          </Text>
        </BaseButton>
      </ThemeProvider>
    );
  }

  if (linkTo) {
    switch (linkType) {
      case 'internal':
        return (
          <InternalLink to={linkTo} target={linkTarget}>
            <RenderButtonContext />
          </InternalLink>
        );
      case 'external':
      default:
        return (
          <ExternalLink href={linkTo} target={linkTarget}>
            <RenderButtonContext />
          </ExternalLink>
        );
    }
  } else {
    return (
      <RenderButtonContext />
    );
  }
};

Button.propTypes = {
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  backgroundColor: PropTypes.oneOf(['red', 'green', 'yellow', 'darkBlue', 'blue']),
  styleType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  linkTo: PropTypes.string,
  linkTarget: PropTypes.oneOf(['_self', '_blank']),
  linkType: PropTypes.oneOf(['external', 'internal']),
};

Button.defaultProps = {
  htmlType: 'submit',
  icon: null,
  wide: false,
  disabled: false,
  size: 'md',
  backgroundColor: 'darkBlue',
  styleType: 'primary',
  linkTo: null,
  linkTarget: '_self',
  linkType: 'internal',
};

export default Button;
