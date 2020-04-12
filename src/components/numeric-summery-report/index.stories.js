import React from 'react';
import { storiesOf } from '@storybook/react';
import NumericSummeryReport from './index';
import '../storybook.css';

storiesOf('NumericSummeryReport', module)
  .add('with short list', () => (
    <NumericSummeryReport
      data={[
        { id: 1, title: 'برگزار شده', count: 12 },
        { id: 2, title: 'فعال', count: 2 },
      ]}
    />
  ))
  .add('with long list', () => (
    <NumericSummeryReport
      data={[
        { id: 1, title: 'برگزار شده', count: 12 },
        { id: 2, title: 'فعال', count: 2 },
        { id: 3, title: 'نامزدی ها', count: 90 },
        { id: 4, title: 'جوایز', count: 34 },
        { id: 5, title: 'تعداد کارمندان', count: 234 },
        { id: 6, title: 'دارایی', count: 3436 },
        { id: 7, title: 'پیشرفت', count: 10 },
      ]}
    />
  ));
