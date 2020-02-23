import React from 'react';
import { Padding } from 'styled-components-spacing';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes';


const Paddinged = (props) => (
  <ThemeProvider theme={defaultTheme}>
    <Padding {...props} />
  </ThemeProvider>
);

export default Paddinged;
