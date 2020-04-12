import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Heading from './index';

export const actions = {
  SmallH1: action('small h1'),
};

storiesOf('Heading', module)
  .add('Heading default', () => <Heading>این یک اچ دیفالت است</Heading>)
  .add('H1 default', () => <Heading level={1}>این یک اچ یک دیفالت است</Heading>)
  .add('H1 small', () => <Heading level={1} size="sm">این یک اچ یک کوچک است</Heading>)
  .add('H1 medium', () => <Heading level={1} size="md">این یک اچ یک متسوط است</Heading>)
  .add('H1 large', () => <Heading level={1} size="lg">این یک اچ یک بزرگ است</Heading>)
  .add('H2 default', () => <Heading level={2}>این یک اچ دو دیفالت است</Heading>)
  .add('H2 small', () => <Heading level={2} size="sm">این یک دو یک کوچک است</Heading>)
  .add('H2 medium', () => <Heading level={2} size="md">این یک اچ دو متسوط است</Heading>)
  .add('H2 medium', () => <Heading level={2} size="lg">این یک اچ دو بزرگ است</Heading>)
  .add('H3 default', () => <Heading level={3}>این یک اچ سه دیفالت است</Heading>)
  .add('H3 small', () => <Heading level={3} size="sm">این یک اچ سه کوچک است</Heading>)
  .add('H3 medium', () => <Heading level={3} size="md">این یک اچ سه متسوط است</Heading>)
  .add('H3 large', () => <Heading level={3} size="lg">این یک اچ سه بزرگ است</Heading>)
  .add('H4 default', () => <Heading level={4}>این یک اچ چهار دیفالت است</Heading>)
  .add('H4 small', () => <Heading level={4} size="sm">این یک اچ چهار کوچک است</Heading>)
  .add('H4 medium', () => <Heading level={4} size="md">این یک اچ چهار متسوط است</Heading>)
  .add('H4 large', () => <Heading level={4} size="lg">این یک اچ چهار بزرگ است</Heading>)
  .add('H5 default', () => <Heading level={5}>این یک اچ پنج دیفالت است</Heading>)
  .add('H5 small', () => <Heading level={5} size="sm">این یک اچ پنج کوچک است</Heading>)
  .add('H5 medium', () => <Heading level={5} size="md">این یک اچ پنج متسوط است</Heading>)
  .add('H5 large', () => <Heading level={5} size="lg">این یک اچ پنج بزرگ است</Heading>)
  .add('H6 default', () => <Heading level={6}>این یک اچ شش دیفالت است</Heading>)
  .add('H6 small', () => <Heading level={6} size="sm">این یک اچ شش کوچک است</Heading>)
  .add('H6 medium', () => <Heading level={6} size="md">این یک اچ شش متسوط است</Heading>)
  .add('H6 large', () => <Heading level={6} size="lg">این یک اچ شش بزرگ است</Heading>);
