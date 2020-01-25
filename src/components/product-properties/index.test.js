import React from 'react';
import { mount } from 'enzyme';
import ProductProperties from './index';
import Icon from '../icon';
import { Text } from '../typography';

describe('ProductProperties Tests', () => {
  it('should render icon and text with special property', () => {
    const list = [{ iconName: 'watch-later', text: 'watch text' }];
    const component = mount(<ProductProperties list={list} />);
    const IconComponent = component.find(Icon);
    const TextComponent = component.find(Text);

    expect(IconComponent.length).toBe(1);
    expect(TextComponent.length).toBe(1);
  });

  it('should render multiple ProductProperty', () => {
    const list = [
      { iconName: 'watch-later', text: 'watch text' },
      { iconName: 'alarm-off', text: 'another text' },
      { iconName: 'aspect-ratio', text: 'and another text' },
    ];
    const component = mount(<ProductProperties list={list} />);
    const IconComponent = component.find(Icon);
    const TextComponent = component.find(Text);

    expect(IconComponent.length).toBe(3);
    expect(TextComponent.length).toBe(3);
  });
});
