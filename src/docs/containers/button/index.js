import React from 'react';
import styled from 'styled-components';

import { Typography, Button } from '../../../components';

const { Heading } = Typography;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ButtonPage = () => (
  <>
    <Heading level={1}>
      دکمه ها
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      نمونه دکمه پیشفرض
    </Heading>
    <Button>
      دکمه
    </Button>
    <br />

    <Heading level={2}>
      دکمه آیکون دار
    </Heading>
    <Button icon="watch_later">
      دکمه آیکون دار
    </Button>
    <br />

    <Heading level={2}>
      دکمه full-width
    </Heading>
    <Button isWide size="sm">
      دکمه full-width (sm size)
    </Button>
    <Button isWide>
      دکمه full-width(md size - default)
    </Button>
    <Button isWide size="lg">
      دکمه full-width(lg size)
    </Button>
    <br />

    <Heading level={2}>
      دکمه در اندازه های متفاوت
    </Heading>

    <Heading level={3}>
      sm size
    </Heading>
    <Button size="sm">
      دکمه
    </Button>
    <Button size="sm" icon="watch_later">
      دکمه
    </Button>
    <br />

    <Heading level={3}>
      md size (default)
    </Heading>
    <Button size="md">
      دکمه
    </Button>
    <Button size="md" icon="watch_later">
      دکمه
    </Button>
    <br />

    <Heading level={3}>
      lg size
    </Heading>
    <Button size="lg">
      دکمه
    </Button>
    <Button size="lg" icon="watch_later">
      دکمه
    </Button>
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
      <Button typeStyle="primary" icon="watch_later" backgroundColor="red">
        دکمه primary (default)
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="red">
        دکمه secondary
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="red">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ قرمز - disabled
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" backgroundColor="red" isDisabled>
        دکمه primary (default) - isDisabled
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="red" isDisabled>
        دکمه secondary - isDisabled
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="red" isDisabled>
        دکمه tertiary - isDisabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ سبز
    </Heading>
    <Heading level={4}>
      رنگ سبز - normal
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" backgroundColor="green">
        دکمه primary (default)
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="green">
        دکمه secondary
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="green">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ سبز - disabled
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" backgroundColor="green" isDisabled>
        دکمه primary (default) - isDisabled
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="green" isDisabled>
        دکمه secondary - isDisabled
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="green" isDisabled>
        دکمه tertiary - isDisabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ زرد
    </Heading>
    <Heading level={4}>
      رنگ زرد - normal
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" backgroundColor="yellow">
        دکمه primary (default)
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="yellow">
        دکمه secondary
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="yellow">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ زرد - disabled
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" backgroundColor="yellow" isDisabled>
        دکمه primary (default) - isDisabled
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="yellow" isDisabled>
        دکمه secondary - isDisabled
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="yellow" isDisabled>
        دکمه tertiary - isDisabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ آبی
    </Heading>
    <Heading level={4}>
      رنگ آبی - normal
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" backgroundColor="blue">
        دکمه primary (default)
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="blue">
        دکمه secondary
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="blue">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ آبی - disabled
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" backgroundColor="blue" isDisabled>
        دکمه primary (default) - isDisabled
      </Button>
      <Button typeStyle="secondary" icon="watch_later" backgroundColor="blue" isDisabled>
        دکمه secondary - isDisabled
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" backgroundColor="blue" isDisabled>
        دکمه tertiary - isDisabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ آبی تیره - پیشفرض
    </Heading>
    <Heading level={4}>
      رنگ آبی تیره - پیشفرض - normal
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later">
        دکمه primary (default)
      </Button>
      <Button typeStyle="secondary" icon="watch_later">
        دکمه secondary
      </Button>
      <Button typeStyle="tertiary" icon="watch_later">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ آبی تیره - پیشفرض - disabled
    </Heading>
    <ButtonWrapper>
      <Button typeStyle="primary" icon="watch_later" isDisabled>
        دکمه primary (default) - isDisabled
      </Button>
      <Button typeStyle="secondary" icon="watch_later" isDisabled>
        دکمه secondary - isDisabled
      </Button>
      <Button typeStyle="tertiary" icon="watch_later" isDisabled>
        دکمه tertiary - isDisabled
      </Button>
    </ButtonWrapper>
    <br />

  </>
);

export default ButtonPage;
