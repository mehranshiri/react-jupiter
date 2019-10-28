import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import Title from './title';
import { findByTestAtrr } from '../../utils';
import theme from '../../themes';

const setupShallow = (props = {}) => (
  shallow(<Title size={props.size} {...props}>{props.children}</Title>)
);

const setupMount = (props = {}) => (
  mount(<Title size={props.size} {...props}>{props.children}</Title>)
);

describe('Title component', () => {
  it('Should render Title', () => {
    const component = setupShallow({
      children: 'این یک تایتل بزرگ است',
    });
    const Title = findByTestAtrr(component, 'title');
    expect(Title.length).toBe(1);
  });

  it('Should render a large Title', () => {
    const Title = setupMount({
      children: 'این یک تایتل بزرگ است',
    });
    expect(Title).toHaveStyleRule('font-size', '18px');
    expect(Title).toHaveStyleRule('line-height', `${18 * theme.typography.headingLineHeightRatio}px`);
  });

  it('Should render a small Title', () => {
    const Title = setupMount({
      children: 'این یک تایتل بزرگ است',
      size: 'small',
    });
    expect(Title).toHaveStyleRule('font-size', '14px');
    expect(Title).toHaveStyleRule('line-height', `${14 * theme.typography.headingLineHeightRatio}px`);
  });

  it('Color of title should be #A7A7A7', () => {
    const Title = setupMount({
      children: 'این یک تایتل بزرگ است',
    });
    expect(Title).toHaveStyleRule('color', theme.colors.gray800);
  });
});
