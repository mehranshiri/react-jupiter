import React from 'react';
import { Margin } from 'styled-components-spacing';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes';


const Margined = (props) => (
  <ThemeProvider theme={defaultTheme}>
    <Margin {...props} />
  </ThemeProvider>
);

export default Margined;
