import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import { findByTestAtrr } from '../utils/test';
import Icon from './index';
import theme from './theme';

const setupShallow = (props = {}) => (
  shallow(<Icon name={props.icon} {...props} />)
);

const setupMount = (props = {}) => (
  mount(<Icon name={props.icon} {...props} />)
);

describe('Icons Tests', () => {
  it('should not render component when name prop is undefined', () => {
    const component = setupShallow();
    const Icon = findByTestAtrr(component, 'icon');
    expect(Icon.length).toBe(0);
  });

  it('should render icon component', () => {
    const component = setupShallow({ name: 'watch-later' });
    const wrapper = findByTestAtrr(component, 'icon');
    expect(wrapper.length).toBe(1);
  });

  it('should render icon component with medium size', () => {
    const component = setupMount({ name: 'watch-later' });
    const Icon = findByTestAtrr(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${theme.size.md}px`);
  });

  it('should render icon component with large size', () => {
    const component = setupMount({ name: 'watch-later', size: 'lg' });
    const Icon = findByTestAtrr(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${theme.size.lg}px`);
  });

  it('should render icon component with small size', () => {
    const component = setupMount({ name: 'watch-later', size: 'sm' });
    const Icon = findByTestAtrr(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${theme.size.sm}px`);
  });

  it('should render gray icon component with small size', () => {
    const component = setupMount({ name: 'watch-later', size: 'sm', color: 'gray' });
    const Icon = findByTestAtrr(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${theme.size.sm}px`);
    expect(Icon).toHaveStyleRule('color', `${theme.colors.gray800}`);
  });
});
