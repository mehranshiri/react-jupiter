import React from 'react';

import { Typography, MainButton } from '../../../components';

const { Heading } = Typography;

const MainButtonPage = () => (
  <>
    <Heading level={1}>
      دکمه ها
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      نمونه دکمه پیشفرض
    </Heading>
    <MainButton>
      دکمه
    </MainButton>
    <br />

    <Heading level={2}>
      دکمه آیکون دار
    </Heading>
    <MainButton icon="watch_later">
      دکمه آیکون دار
    </MainButton>
    <br />

    <Heading level={2}>
      دکمه full-width
    </Heading>
    <MainButton isWide size="sm">
      دکمه full-width (sm size)
    </MainButton>
    <MainButton isWide>
      دکمه full-width(md size - default)
    </MainButton>
    <MainButton isWide size="lg">
      دکمه full-width(lg size)
    </MainButton>
    <br />

    <Heading level={2}>
      دکمه در اندازه های متفاوت
    </Heading>

    <Heading level={3}>
      sm size
    </Heading>
    <MainButton size="sm">
      دکمه
    </MainButton>
    <MainButton size="sm" icon="watch_later">
      دکمه
    </MainButton>
    <br />

    <Heading level={3}>
      md size (default)
    </Heading>
    <MainButton size="md">
      دکمه
    </MainButton>
    <MainButton size="md" icon="watch_later">
      دکمه
    </MainButton>
    <br />

    <Heading level={3}>
      lg size
    </Heading>
    <MainButton size="lg">
      دکمه
    </MainButton>
    <MainButton size="lg" icon="watch_later">
      دکمه
    </MainButton>
    <br />

    <Heading level={2}>
      دکمه های رنگی
    </Heading>
    <MainButton backgroundColor="red">
      دکمه قرمز
    </MainButton>
    <MainButton backgroundColor="green">
      دکمه سبز
    </MainButton>
    <MainButton backgroundColor="yellow">
      دکمه زرد
    </MainButton>
    <MainButton backgroundColor="darkBlue">
      دکمه آبی تیره-پیشفرض
    </MainButton>
    <br />

  </>
);

export default MainButtonPage;
