import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Text } from '../typography';
import { BaseButton, StyledIcon } from './index.styles';
import buttonTheme from './theme';


const MainButton = (props) => {
  const {
    htmlType,
    icon,
    children,
    isWide,
    size,
    backgroundColor,
    typeStyle,
    className,
  } = props;
  return (
    <ThemeProvider theme={buttonTheme}>
      <BaseButton
        data-test="button"
        type={htmlType}
        isWide={isWide}
        size={size}
        backgroundColor={backgroundColor}
        className={`${className} button-${typeStyle}`}
      >
        {
          icon
            && (
              <StyledIcon
                name={icon}
                size={size}
                color={typeStyle !== 'primary' ? backgroundColor : 'white'}
              />
            )
        }
        <Text
          size={buttonTheme.size[size].font}
          color={typeStyle !== 'primary' ? backgroundColor : 'white'}
          bold
        >
          {children}
        </Text>
      </BaseButton>
    </ThemeProvider>
  );
};

MainButton.propTypes = {
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  isWide: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  backgroundColor: PropTypes.oneOf(['red', 'green', 'yellow', 'darkBlue', 'blue']),
  typeStyle: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

MainButton.defaultProps = {
  htmlType: 'submit',
  icon: '',
  isWide: false,
  size: 'md',
  backgroundColor: 'darkBlue',
  typeStyle: 'primary',
  className: '',
};

export default MainButton;
