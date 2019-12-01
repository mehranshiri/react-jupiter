import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../themes';
import { ButtonContainer } from './index.styles';

const Button = (props) => {
  const { rounded } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonContainer rounded={rounded}>
        متن دکمه
      </ButtonContainer>
    </ThemeProvider>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  rounded: false,
};

export default Button;
