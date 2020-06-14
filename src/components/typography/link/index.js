import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import defaultTheme from '../theme';
import Text from '../text';
import ExternalLink from './index.styles';

const generateLink = (props) => {
  const {
    external, children, href, linkContent, target, size, strong, emphasized, ...rest
  } = props;
  if (typeof href === 'function') {
    return href(
      <Text
        size={size}
        strong={strong}
        emphasized={emphasized}
        color="blue"
        {...rest}
      >
        {linkContent}
      </Text>,
    );
  }
  return (
    <ExternalLink href={href} target={target} data-test="external" {...rest}>
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
};

generateLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  href: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  linkContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  size: PropTypes.number,
  strong: PropTypes.bool,
  emphasized: PropTypes.bool,
};

generateLink.defaultProps = {
  href: '',
  external: false,
  target: '_self',
  size: 14,
  strong: false,
  emphasized: false,
};

const Link = (props) => {
  const { children, linkContent } = props;
  if (children === undefined && linkContent === undefined) return null;
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {generateLink(props)}
    </ThemeProvider>
  );
};


Link.propTypes = generateLink.propTypes;

Link.defaultProps = generateLink.defaultProps;

export default Link;
