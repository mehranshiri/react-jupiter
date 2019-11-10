import React from 'react';
import PropTypes from 'prop-types';
import { Img } from './index.styles';
import GlobalAndThemeWrapper from '../global';

const Avatar = (props) => {
  const {
    src,
    alt,
    borderColor,
    size,
  } = props;

  return (
    <GlobalAndThemeWrapper>
      <Img src={src} alt={alt} borderColor={borderColor} size={size} data-test="avatar" {...props} />
    </GlobalAndThemeWrapper>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  borderColor: PropTypes.oneOf(['primaryColor', 'white']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
};

Avatar.defaultProps = {
  alt: 'آواتار',
  borderColor: 'primaryColor',
  size: 'md',
};

export default Avatar;
