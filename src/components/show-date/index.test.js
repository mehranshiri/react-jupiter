import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ShowDate from './index';
import { findByTestAtrr } from '../utils/testUtils';

const setupShallow = (props = {}) => (
  shallow(
    <ShowDate
      date={props.date}
      dateFormat={props.dateFormat}
      {...props}
    />,
  )
);

describe('ShowDate component', () => {
  it('should render correctly', () => {
    const component = setupShallow({ date: new Date() });
    const DateBookmark = findByTestAtrr(component, 'show-date');
    expect(DateBookmark.length).toBe(1);
  });
});
