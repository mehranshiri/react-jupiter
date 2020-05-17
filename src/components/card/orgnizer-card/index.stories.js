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
      logo={text('logo(optional)', 'https://i.pravatar.cc/150?img=62')}
      renderAvatarLink={(el) => (<a href="https://i.pravatar.cc/150?img=62">{el}</a>)}
      activeEventsCount={text('activeEventsCount(optional)', '۱۲۳')}
      allEventsCount={text('allEventsCount(optional)', '۲۴۵۶۷')}
    />
  ))
  .addDecorator(withKnobs)
  .addDecorator(withInfo);
