import React from 'react';
import styled from 'styled-components';

import { Typography, MainButton } from '../../../components';

const { Heading } = Typography;

const ButtonWrapper = styled.div`
  display: flex;
`;

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
    <Heading level={4}>
      رنگ قرمز - normal
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="red">
        دکمه primary (default)
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="red">
        دکمه secondary
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="red">
        دکمه tertiary
      </MainButton>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ قرمز - disabled
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="red" isDisabled>
        دکمه primary (default) - isDisabled
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="red" isDisabled>
        دکمه secondary - isDisabled
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="red" isDisabled>
        دکمه tertiary - isDisabled
      </MainButton>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ سبز
    </Heading>
    <Heading level={4}>
      رنگ سبز - normal
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="green">
        دکمه primary (default)
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="green">
        دکمه secondary
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="green">
        دکمه tertiary
      </MainButton>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ سبز - disabled
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="green" isDisabled>
        دکمه primary (default) - isDisabled
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="green" isDisabled>
        دکمه secondary - isDisabled
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="green" isDisabled>
        دکمه tertiary - isDisabled
      </MainButton>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ زرد
    </Heading>
    <Heading level={4}>
      رنگ زرد - normal
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="yellow">
        دکمه primary (default)
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="yellow">
        دکمه secondary
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="yellow">
        دکمه tertiary
      </MainButton>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ زرد - disabled
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="yellow" isDisabled>
        دکمه primary (default) - isDisabled
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="yellow" isDisabled>
        دکمه secondary - isDisabled
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="yellow" isDisabled>
        دکمه tertiary - isDisabled
      </MainButton>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ آبی
    </Heading>
    <Heading level={4}>
      رنگ آبی - normal
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="blue">
        دکمه primary (default)
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="blue">
        دکمه secondary
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="blue">
        دکمه tertiary
      </MainButton>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ آبی - disabled
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" backgroundColor="blue" isDisabled>
        دکمه primary (default) - isDisabled
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" backgroundColor="blue" isDisabled>
        دکمه secondary - isDisabled
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" backgroundColor="blue" isDisabled>
        دکمه tertiary - isDisabled
      </MainButton>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ آبی تیره - پیشفرض
    </Heading>
    <Heading level={4}>
      رنگ آبی تیره - پیشفرض - normal
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later">
        دکمه primary (default)
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later">
        دکمه secondary
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later">
        دکمه tertiary
      </MainButton>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ آبی تیره - پیشفرض - disabled
    </Heading>
    <ButtonWrapper>
      <MainButton typeStyle="primary" icon="watch_later" isDisabled>
        دکمه primary (default) - isDisabled
      </MainButton>
      <MainButton typeStyle="secondary" icon="watch_later" isDisabled>
        دکمه secondary - isDisabled
      </MainButton>
      <MainButton typeStyle="tertiary" icon="watch_later" isDisabled>
        دکمه tertiary - isDisabled
      </MainButton>
    </ButtonWrapper>
    <br />

  </>
);

export default MainButtonPage;
