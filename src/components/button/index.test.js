import React from 'react';
import { render, mount } from 'enzyme';
import { findByTestAtrr } from '../utils/testUtils';

import Button from './index';

describe('mainButton', () => {
  it('render simple default mainButton component', () => {
    const component = mount(<Button>my simple button</Button>);

    expect(component.text()).toBe('my simple button');
    expect(component.props().htmlType).toBe('submit');
  });

  it('render iconic mainButton component', () => {
    const component = render(
      <Button icon="watch_later">
        دکمه آیکون دار
      </Button>,
    );
    const iconWrapper = findByTestAtrr(component, 'icon');

    expect(iconWrapper.length).toBe(1);
  });
});
