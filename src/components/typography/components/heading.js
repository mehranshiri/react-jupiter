import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import GlobalStyle from '../../globalStyle';
import {
  H1, H2, H3, H4, H5,
} from './heading.styles';

const Heading = (props) => {
  const { children, level, ...rest } = props;

  const renderLevel = (children, level) => {
    if (children === undefined) {
      return null;
    }
    switch (level) {
      case 5:
        return (<H5 data-test="h5-tag" {...rest}>{children}</H5>);
      case 4:
        return (<H4 data-test="h4-tag" {...rest}>{children}</H4>);
      case 3:
        return (<H3 data-test="h3-tag" {...rest}>{children}</H3>);
      case 2:
        return (<H2 data-test="h2-tag" {...rest}>{children}</H2>);
      case 1:
      default:
        return (<H1 data-test="h1-tag" {...rest}>{children}</H1>);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        {renderLevel(children, level)}
      </>
    </ThemeProvider>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  level: PropTypes.number, // accepted inputs: 1 or 2 or ... or 6
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
