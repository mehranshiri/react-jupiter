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
      دکمه ها در استایل ها متفاوت و رنگ های متفاوت
    </Heading>
    <Heading level={3}>
      رنگ قرمز
    </Heading>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="red">
      دکمه primary (default)
    </MainButton>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="red" isDisabled>
      دکمه primary (default) - isDisabled
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="red">
      دکمه secondary
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="red" isDisabled>
      دکمه secondary - isDisabled
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="red">
      دکمه tertiary
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="red" isDisabled>
      دکمه tertiary - isDisabled
    </MainButton>
    <hr />
    <Heading level={3}>
      رنگ سبز
    </Heading>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="green">
      دکمه primary (default)
    </MainButton>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="green" isDisabled>
      دکمه primary (default) - isDisabled
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="green">
      دکمه secondary
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="green" isDisabled>
      دکمه secondary - isDisabled
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="green">
      دکمه tertiary
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="green" isDisabled>
      دکمه tertiary - isDisabled
    </MainButton>
    <hr />
    <Heading level={3}>
      رنگ زرد
    </Heading>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="yellow">
      دکمه primary (default)
    </MainButton>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="yellow" isDisabled>
      دکمه primary (default) - isDisabled
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="yellow">
      دکمه secondary
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="yellow" isDisabled>
      دکمه secondary - isDisabled
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="yellow">
      دکمه tertiary
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="yellow" isDisabled>
      دکمه tertiary - isDisabled
    </MainButton>
    <hr />
    <Heading level={3}>
      رنگ آبی
    </Heading>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="blue">
      دکمه primary (default)
    </MainButton>
    <MainButton typeStyle="primary" icon="watch_later" backgroundColor="blue" isDisabled>
      دکمه primary (default) - isDisabled
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="blue">
      دکمه secondary
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="blue" isDisabled>
      دکمه secondary - isDisabled
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="blue">
      دکمه tertiary
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="blue" isDisabled>
      دکمه tertiary - isDisabled
    </MainButton>
    <hr />
    <Heading level={3}>
      رنگ آبی تیره - پیشفرض
    </Heading>
    <MainButton typeStyle="primary" icon="watch_later">
      دکمه primary (default)
    </MainButton>
    <MainButton typeStyle="primary" icon="watch_later" isDisabled>
      دکمه primary (default) - isDisabled
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later">
      دکمه secondary
    </MainButton>
    <MainButton typeStyle="secondary" icon="watch_later" isDisabled>
      دکمه secondary - isDisabled
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later">
      دکمه tertiary
    </MainButton>
    <MainButton typeStyle="tertiary" icon="watch_later" isDisabled>
      دکمه tertiary - isDisabled
    </MainButton>
    <br />

  </>
);

export default MainButtonPage;
