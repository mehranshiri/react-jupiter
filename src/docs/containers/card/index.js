import React from 'react';

import { Typography } from '../../../components';
import ShowDate from '../../../components/show-date';

const { Heading } = Typography;

const CardPage = () => (
  <>
    <Heading level={1}>
      کارت
    </Heading>
    <ShowDate date={new Date()} />

  </>
);

export default CardPage;
