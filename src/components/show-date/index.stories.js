import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ShowDate from './index';
import '../storybook.css';

storiesOf('ShowDate', module)
  .add('date with date object', () => <ShowDate date={new Date()} />)
  .add('date with date string', () => <ShowDate date="2020-04-24T10:00:00+0330" />)
  .add('date with custom size', () => <ShowDate date={new Date()} fontSize={18} />)
  .add('date with color', () => <ShowDate date="2020-04-24T10:00:00+0330" />)
  .addDecorator(withInfo);
