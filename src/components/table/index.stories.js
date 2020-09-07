import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Table from './index';
import Icon from '../icon';

const columns = [
  {
    key: 'firstTitle',
    label: 'عنوان اول',
    dataType: 'text',
  },
];
const data = [
  {
    key: 'firstRow',
    firstTitle: 'سارا',
  },
];
const columns02 = [
  {
    key: 'firstTitle',
    label: 'عنوان اول',
    dataType: 'text',
  },
  {
    key: 'tirdTitle',
    label: 'عنوان سوم اینجا قرار می گیرد',
    dataType: 'node',
  },
  {
    key: 'forthTitle',
    label: 'عنوان چهارم',
    dataType: 'text',
  },
];
const columns03 = [
  {
    key: 'firstTitle',
    label: 'نام',
    dataType: 'text',
  },
  {
    key: 'secoundTitle',
    label: 'نام خانوادگی',
    dataType: 'action',
  },
  {
    key: 'tirdTitle',
    label: 'سمت',
    dataType: 'node',
  },
  {
    key: 'forthTitle',
    label: 'سن',
    dataType: 'text',
  },
  {
    key: 'the5th',
    label: 'نوع نود',
    dataType: 'node',
  },
];
const data03 = [
  {
    key: 'firstRow',
    firstTitle: 'سارا',
    tirdTitle: 'مدیر بازرگانی',
    wrongTitle: '۳۰ ساله',
    the5th: (<Icon name="watch-later" size="lg" />),
  },
  {
    key: 'the2ndRow',
    firstTitle: 'احمد',
    tirdTitle: 'آبدارجی',
    the5th: (<a href="http://evand.com">لینک تستی</a>),
    forthTitle: '۵۵ ساله',
    status: 'yellow',
    callToActions: [
      {
        text: 'نایینی',
        props: { renderLink: (element) => <a href="http://google.com">{element}</a> },
      },
      {
        props: { renderLink: (element) => <a href="http://yahoo.com">{element}</a> },
        text: 'دومی',
      },
      {
        props: { renderLink: (element) => <a href="http://evand.com">{element}</a> },
        text: 'سومین مورد',
      },
      {
        props: { renderLink: (element) => <a href="http://evand.com">{element}</a> },
        text: ' بعدی',
      },
      {
        props: { renderLink: (element) => <a href="http://evand.com">{element}</a> },
        text: 'بعدیش مورد',
      },
    ],
  },
  {
    status: 'green',
    key: 'the3hRow',
    firstTitle: 'زهرا',
    tirdTitle: 'مدیر فروش',
    forthTitle: '۲۰ ساله',
    callToActions: [
      {
        props: {
          renderLink: (element) => <a href="https://devhints.io/enzyme">{element}</a>,
          disabled: true,
        },
        text: 'زنگنه',
      },
    ],
  },
];

storiesOf('Table', module)
  .add('minimal Table', () => (
    <Table columns={columns} data={data} />
  ))
  .add('Table example 02', () => (
    <Table columns={columns02} data={data} />
  ))
  .add('full option Table', () => (
    <Table columns={columns03} data={data03} />
  ))
  .addDecorator(withInfo);
