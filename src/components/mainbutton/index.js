import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Icon from '../icon';
import { Text } from '../typography';
import { BaseButton } from './index.styles';
import buttonTheme from './theme';


const MainButton = (props) => {
  const {
    htmlType,
    icon,
    children,
    isWide,
    size,
    backgroundColor,
  } = props;

  return (
    <ThemeProvider theme={buttonTheme}>
      <BaseButton
        data-test="button"
        type={htmlType}
        isWide={isWide}
        size={size}
        backgroundColor={backgroundColor}
      >
        {
          icon
            && <Icon name={icon} size={size} color="white" />
        }
        <Text size={buttonTheme.size[size].font} color="white" bold>
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
  isWide: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  backgroundColor: PropTypes.oneOf(['red', 'green', 'yellow', 'darkBlue']),
};

MainButton.defaultProps = {
  htmlType: 'submit',
  icon: '',
  isWide: false,
  size: 'md',
  backgroundColor: 'darkBlue',
};

export default MainButton;
