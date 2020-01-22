import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils/test';
import NumericSummeryReport from './index';

const setupShallow = (props = {}) => (
  shallow(<NumericSummeryReport data={props.data} {...props} />)
);

describe('Numeric Summery Report', () => {
  it('should render correctly', () => {
    const component = setupShallow({
      data: [
        { id: 1, title: 'برگزار شده', count: 12 },
        { id: 2, title: 'فعال', count: 2 },
        { id: 3, title: 'دنبال کننده‌ها', count: 346 },
      ],
    });
    const NumericSummeryReport = findByTestAtrr(component, 'numeric-summery-report');
    expect(NumericSummeryReport.length).toBe(1);
  });
});
