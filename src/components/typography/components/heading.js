import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import {
  H1, H2, H3, H4, H5,
} from './heading.styles';

const Heading = (props) => {
  const { children, level } = props;

  const renderLevel = (children, level) => {
    switch (level) {
      case 5:
        return (<H5>{children}</H5>);
      case 4:
        return (<H4>{children}</H4>);
      case 3:
        return (<H3>{children}</H3>);
      case 2:
        return (<H2>{children}</H2>);
      case 1:
      default:
        return (<H1>{children}</H1>);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {renderLevel(children, level)}
    </ThemeProvider>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
