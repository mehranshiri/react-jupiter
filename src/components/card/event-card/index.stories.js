import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import EventCard from './index';
import '../../storybook.css';

storiesOf('EventCard', module)
  .add('horizontal event card', () => (
    <EventCard
      type="horizontal"
      title="تایتل یک رویداد نسبتا طولانی در اینجاست که باید و باید و قرار است اضافه بیاید و بزند به بیرون"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      clickBookmark={() => true}
      queryString="icn=trendEvents&ici=fp5"
      renderEventLink={(element) => <a href="/tosomewhere">{element}</a>}
    />
  ))
  .add('horizontal event card with ads', () => (
    <EventCard
      type="horizontal"
      title="تایتل یک رویداد نسبتا طولانی در اینجاست که باید و باید و قرار است اضافه بیاید و بزند به بیرون"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      ads
      price="از ۴۴۰۰۰ تومان"
      clickBookmark={() => true}
      queryString="icn=trendEvents&ici=fp5"
      renderEventLink={(element) => <a href="/tosomewhere">{element}</a>}
    />
  ))
  .add('horizontal event card with finished', () => (
    <EventCard
      type="horizontal"
      title="تایتل یک رویداد نسبتا طولانی در اینجاست که باید و باید و قرار است اضافه بیاید و بزند به بیرون"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      finished
      price="از ۴۴۰۰۰ تومان"
      clickBookmark={() => true}
      queryString="icn=trendEvents&ici=fp5"
      renderEventLink={(element) => <a href="/tosomewhere">{element}</a>}
    />
  ))
  .add('vertical event card', () => (
    <EventCard
      type="vertical"
      title="تایتل یک رویداد اینجاست کهن"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      organization={{
        name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
        logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
      }}
      clickBookmark={() => true}
      renderEventLink={(element) => <a href="/tosomewherenew">{element}</a>}
      renderOrganizationLink={(element) => <a href="/toorganization">{element}</a>}
    />
  ))
  .add('vertical event card with finished', () => (
    <EventCard
      type="vertical"
      title="تایتل یک رویداد اینجاست کهن"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      organization={{
        name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
        logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
      }}
      finished
      clickBookmark={() => true}
      renderEventLink={(element) => <a href="/tosomewherenew">{element}</a>}
      renderOrganizationLink={(element) => <a href="/toorganization">{element}</a>}
    />
  ))
  .add('vertical event card with ads', () => (
    <EventCard
      type="vertical"
      title="تایتل یک رویداد اینجاست کهن"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      organization={{
        name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
        logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
      }}
      ads
      clickBookmark={() => true}
      renderEventLink={(element) => <a href="/tosomewherenew">{element}</a>}
      renderOrganizationLink={(element) => <a href="/toorganization">{element}</a>}
    />
  ))
  .addDecorator(withInfo);
