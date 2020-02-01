import React from 'react';
import { Cover, Typography } from '../../../components';

const { Heading } = Typography;

const CoverPage = () => (
  <>
    <Heading level={1}>
      کاور
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      کاور ساده
    </Heading>
    <Cover />
    <br />

  </>
);

export default CoverPage;
