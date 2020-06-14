import React from 'react';
import PropTypes from 'prop-types';
import ImageLabel from './index.style';
import adsLabel from '../../../assets/images/ads-label.svg';
import finished from '../../../assets/images/finished-text-label.svg';

const EventCardLabel = ({ type }) => {
  switch (type) {
    case 'ads':
      return <ImageLabel src={adsLabel} data-test="ads-label" />;
    case 'finished':
    default:
      return <ImageLabel src={finished} data-test="finished-label" />;
  }
};

EventCardLabel.propTypes = {
  type: PropTypes.oneOf(['ads', 'finished']).isRequired,
};

export default EventCardLabel;
