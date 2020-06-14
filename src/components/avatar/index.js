import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultImage from '../assets/defaults-images/Avatar_default.svg';
import Image from './index.styles';
import avatarTheme from './theme';

const Avatar = (props) => {
  const {
    src,
    alt,
    size,
    ...rest
  } = props;

  return (
    <ThemeProvider theme={avatarTheme}>
      <Image src={src} alt={alt} size={size} data-test="avatar" {...rest} />
    </ThemeProvider>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
};

Avatar.defaultProps = {
  alt: 'آواتار',
  size: 'md',
  src: defaultImage,
};

export default Avatar;
