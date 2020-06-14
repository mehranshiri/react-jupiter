import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';
import OrgnizerCard from './index';

storiesOf('OrganizerCard', module)
  .add('sample', () => (
    <OrgnizerCard
      name={text('name', 'نام صاحب آواتار')}
      followersCount={text('followersCount (string-optional)', '۱۳۲۴۷')}
      description={
        text('description(optional)',
          'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی')
      }
      logo={text('logo(optional)', 'https://i.pravatar.cc/150?img=62')}
      renderOrganizerLink={(el) => (<a href="https://i.pravatar.cc/150?img=62">{el}</a>)}
      activeEventsCount={text('activeEventsCount(optional)', '۱۲۳')}
      allEventsCount={text('allEventsCount(optional)', '۲۴۵۶۷')}
      recommendedCount={text('recommendedCount(optional)', '۳۳ نفر')}
    />
  ))
  .addDecorator(withKnobs)
  .addDecorator(withInfo);
