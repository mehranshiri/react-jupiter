import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import findByTestAtrr from '../utils/test';
import Table from './index';

const defaultColumns = [
  {
    key: 'firstTitle',
    label: 'عنوان اول',
    dataType: 'text',
  },
];
const defaultData = [
  {
    key: 'firstRow',
    firstTitle: 'سارا',
  },
];

const setupMount = (columns = defaultColumns, data = defaultData) => (
  mount(<Table columns={columns} data={data} />)
);

describe('Table Tests', () => {
  it('render table and display minimal data properly', () => {
    const component = setupMount();
    const Table = findByTestAtrr(component, 'jupiter-table');

    expect(Table.length).not.toBe(0);
    expect(Table.find('thead tr').childAt(0).text()).toBe('عنوان اول');
    expect(Table.find('tbody tr').childAt(0).text()).toBe('سارا');
  });

  it('render table header', () => {
    const columns = [
      {
        key: 'firstTitle',
        label: 'عنوان اول',
        dataType: 'text',
      },
      {
        key: 'secoundTitle',
        label: 'عنوان دوم',
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
    const component = setupMount(columns);
    const Table = findByTestAtrr(component, 'jupiter-table');

    expect(Table.find('thead tr').childAt(0).text()).toBe('عنوان اول');
    expect(Table.find('thead tr').childAt(1).text()).toBe('عنوان دوم');
    expect(Table.find('thead tr').childAt(2).text()).toBe('عنوان سوم اینجا قرار می گیرد');
    expect(Table.find('thead tr').childAt(3).text()).toBe('عنوان چهارم');
  });

  it('render table body proparely', () => {
    const columns = [
      {
        key: 'firstTitle',
        label: 'نام',
        dataType: 'text',
      },
      {
        key: 'secoundTitle',
        label: 'نام خانوادگی',
        dataType: 'text',
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
    ];
    const data = [
      {
        key: 'firstRow',
        firstTitle: 'سارا',
        tirdTitle: 'مدیر بازرگانی',
        wrongTitle: '۳۰ ساله',
        secoundTitle: 'احمدی',
      },
      {
        key: 'the2ndRow',
        firstTitle: 'احمد',
        secoundTitle: 'نایینی',
        tirdTitle: 'آبدارجی',
        forthTitle: '۵۵ ساله',
      },
      {
        key: 'the3hRow',
        firstTitle: 'زهرا',
        secoundTitle: 'زنگنه',
        tirdTitle: 'مدیر فروش',
        forthTitle: '۲۰ ساله',
      },
    ];
    const component = setupMount(columns, data);
    const Table = findByTestAtrr(component, 'jupiter-table');

    expect(Table.find('tbody').childAt(0).text()).toBe('سارااحمدیمدیر بازرگانی-');
    expect(Table.find('tbody').childAt(1).text()).toBe('احمدنایینیآبدارجی۵۵ ساله');
  });
});
