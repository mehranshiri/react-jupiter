import React from 'react';
import PropTypes from 'prop-types';
import GlobalAndThemeWrapper from '../utils';
import { Image } from './index.styles';
import avatarTheme from './theme';

const Avatar = (props) => {
  const {
    src,
    alt,
    size,
  } = props;

  return (
    <GlobalAndThemeWrapper theme={avatarTheme}>
      <Image src={src} alt={alt} size={size} data-test="avatar" {...props} />
    </GlobalAndThemeWrapper>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
};

Avatar.defaultProps = {
  alt: 'آواتار',
  size: 'md',
};

export default Avatar;
