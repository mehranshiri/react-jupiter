import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Text } from '../typography';
import { BaseButton, StyledIcon } from './index.styles';
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
  } = props;
  const fontColor = setFontColor(styleType, backgroundColor);

  return (
    <ThemeProvider theme={theme}>
      <BaseButton
        data-test="button"
        type={htmlType}
        wide={wide}
        size={size}
        backgroundColor={backgroundColor}
        disabled={disabled}
        data-styleType={styleType}
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
};

Button.defaultProps = {
  htmlType: 'submit',
  icon: '',
  wide: false,
  disabled: false,
  size: 'md',
  backgroundColor: 'darkBlue',
  styleType: 'primary',
};

export default Button;
