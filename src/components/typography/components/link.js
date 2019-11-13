import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import GlobalStyle from '../../globalStyle';
import Text from './text';
import { InternalLink, ExternalLink } from './link.styles';

const renderLink = (props) => {
  const {
    external, children, to, target, size, strong, emphasized, ...rest
  } = props;
  if (external) {
    return (
      <ExternalLink href={to} target={target} data-test="external-link" {...rest}>
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
    <InternalLink to={to} target={target} data-test="internal-link" {...rest}>
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

renderLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  external: PropTypes.bool,
  to: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  size: PropTypes.number,
  strong: PropTypes.bool,
  emphasized: PropTypes.bool,
};

renderLink.defaultProps = {
  external: false,
  target: '_self',
  size: 14,
  strong: false,
  emphasized: false,
};

const Link = (props) => {
  const { children, to } = props;
  if (children === undefined || to === undefined) return null;
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        {renderLink(props)}
      </>
    </ThemeProvider>
  );
};


Link.propTypes = renderLink.propTypes;

Link.defaultProps = renderLink.defaultProps;

export default Link;
