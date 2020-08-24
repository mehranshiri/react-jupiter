import React from 'react';
import { shallow } from 'enzyme';
import findByTestAtrr from '../utils/test';
import Menu from './menu';
import MenuItem from './menu-item';

describe('ProductMenu', () => {
  it('render nav Menu', () => {
    const component = shallow(<Menu />);
    const wrapper = findByTestAtrr(component, 'product-menu');
    expect(wrapper.length).toBe(1);
  });
  it('render ol', () => {
    const component = shallow(<Menu />);
    const wrapper = findByTestAtrr(component, 'product-menu').find('ol');
    expect(wrapper.length).toBe(1);
  });
  it('render menu Item', () => {
    const component = shallow(
      <Menu>
        <MenuItem />
      </Menu>,
    );
    const wrapper = findByTestAtrr(component, 'product-menu-item');
    expect(wrapper.length).toBe(1);
  });
});
