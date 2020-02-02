import React from 'react';
import { Link } from 'react-router-dom';
import { Cover, Typography } from '../../../components';
import sampleCover from '../../assets/cover-sample.png';

const { Heading } = Typography;

const CoverPage = () => (
  <>
    <Heading level={1}>
      کاور
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      کاور ساده بدون آدرس عکس کاور
    </Heading>
    <Cover />
    <br />
    <Heading level={2}>
      کاور ساده با آدرس دهی اشتباه
    </Heading>
    <Cover src="wrong-src" />
    <br />
    <Heading level={2}>
      کاور ساده
    </Heading>
    <Cover src={sampleCover} />
    <br />
    <br />
    <Heading level={2}>
      کاور با لینک بیرونی
    </Heading>
    <Cover linkTo="http://yahoo.com" />
    <br />
    <Heading level={2}>
      کاور با لینک درونی
    </Heading>
    <Cover
      renderLink={(element) => <Link to="/components/card">{element}</Link>}
    />
    <br />

  </>
);

export default CoverPage;
