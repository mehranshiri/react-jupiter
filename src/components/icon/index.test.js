import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils/testUtils';

import Icon from './index';

describe('icon', () => {
  it('render icon component', () => {
    const component = shallow(<Icon iconName="baseline-watch_later" />);
    const wrapper = findByTestAtrr(component, 'icon');
    expect(wrapper.length).toBe(1);
  });
});
