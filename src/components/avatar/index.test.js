import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils';

import Avatar from './index';

describe('avatar', () => {
  it('render avatar component', () => {
    const component = shallow(<Avatar />);
    const wrapper = findByTestAtrr(component, 'avatar');
    expect(wrapper.length).toBe(1);
  });
});
