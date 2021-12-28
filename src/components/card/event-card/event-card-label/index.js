import React from 'react';
import PropTypes from 'prop-types';
import ImageLabel from './index.style';

// const adsLabelUrl = 'https://evand-storage.oss-eu-central-1.aliyuncs.com/assets/images/other/ads-label.svg';
const adsLabelUrl = require('../../../../docs/assets/ads-label.svg');

const finishedLabelUrl = 'https://evand-storage.oss-eu-central-1.aliyuncs.com/assets/images/other/finished-text-label.svg';

const EventCardLabel = ({ type }) => {
  switch (type) {
    case 'ads':
      return <ImageLabel src={adsLabelUrl} data-test="ads-label" />;
    case 'finished':
    default:
      return <ImageLabel src={finishedLabelUrl} data-test="finished-label" />;
  }
};

EventCardLabel.propTypes = {
  type: PropTypes.oneOf(['ads', 'finished']).isRequired,
};

export default EventCardLabel;
