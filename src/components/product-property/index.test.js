import React from 'react';
import { shallow } from 'enzyme';
import ProductProperty from './index';
import Icon from '../icon';
import { Text } from '../typography';

describe('ProductProperty Tests', () => {
  it('should render icon and text with special property', () => {
    const component = shallow(<ProductProperty iconName="watch-later" text="watch text" />);
    const IconComponent = component.find(Icon);
    const TextComponent = component.find(Text);

    expect(IconComponent.length).toBe(1);
    expect(TextComponent.length).toBe(1);
  });
});
