import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../typography';
import { convertToJalaali } from '../utils/date';
import { DateContainer } from './index.style';

const ShowDate = (props) => {
  const { date, fontSize } = props;

  return (
    <DateContainer data-test="show-date">
      <Text size={fontSize}>
        {convertToJalaali(date, 'dddd jD jMMMM')}
      </Text>
    </DateContainer>
  );
};

ShowDate.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

ShowDate.defaultProps = {
  fontSize: 12,
};


export default ShowDate;
