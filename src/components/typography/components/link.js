import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import Text from './text';
import { InternalLink, ExternalLink } from './link.styles';

const renderLink = (options) => {
  const {
    external, children, to, target, size, strong, emphasized,
  } = options;
  if (external) {
    return (
      <ExternalLink href={to} target={target} hover data-test="external-link">
        <Text
          size={size}
          strong={strong}
          emphasized={emphasized}
          color="blue"
        >
          {children}
        </Text>
      </ExternalLink>
    );
  }
  return (
    <InternalLink to={to} target={target} hover data-test="internal-link">
      <Text
        size={size}
        strong={strong}
        emphasized={emphasized}
        color="blue"
      >
        {children}
      </Text>
    </InternalLink>
  );
};

const Link = (props) => {
  const {
    children, external, to, target, size, strong, emphasized,
  } = props;
  if (children === undefined || to === undefined) return null;
  return (
    <ThemeProvider theme={defaultTheme}>
      {renderLink({
        children,
        external,
        to,
        target,
        size,
        strong,
        emphasized,
      })}
    </ThemeProvider>
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  external: PropTypes.bool,
  to: PropTypes.string.isRequired,
  target: PropTypes.string, // accepted input: "_self" or "_blank" or "_parent" or "_top"
  size: PropTypes.number,
  strong: PropTypes.bool,
  emphasized: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
  target: '_self',
  size: 14,
  strong: false,
  emphasized: false,
};

export default Link;
