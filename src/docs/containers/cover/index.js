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

    <Heading level={2}>
      کاور lazy-load
    </Heading>
    <Cover
      src="https://images.unsplash.com/photo-1563271963-9ff697463684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      isLazy
    />
    <br />
    <Cover isLazy src="https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80" />
    <br />
    <Cover
      isLazy
      src="https://images.unsplash.com/photo-1566650141466-788ec481d69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
      renderLink={(element) => <Link to="/components/card">{element}</Link>}
    />
    <br />
    <Cover
      isLazy
      src="https://images.unsplash.com/photo-1543572414-f353d97a5212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      linkTo="http://yahoo.com"
    />
    <br />
    <Cover isLazy src="wrong-lazy-src" minHeight={151} />
    <br />

  </>
);

export default CoverPage;
