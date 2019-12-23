import React from 'react';
import { render, mount } from 'enzyme';
import { findByTestAtrr } from '../utils/testUtils';

import MainButton from './index';

describe('mainButton', () => {
  it('render simple default mainButton component', () => {
    const component = mount(<MainButton>my simple button</MainButton>);

    expect(component.text()).toBe('my simple button');
    expect(component.props().htmlType).toBe('submit');
  });

  it('render iconic mainButton component', () => {
    const component = render(
      <MainButton icon="watch_later">
        دکمه آیکون دار
      </MainButton>,
    );
    const iconWrapper = findByTestAtrr(component, 'icon');

    expect(iconWrapper.length).toBe(1);
  });
});
