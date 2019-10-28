import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import Paragraph from './paragraph';
import { findByTestAtrr } from '../../utils';
import theme from '../../themes';

const setupShallow = (props = {}) => (
  shallow(<Paragraph size={props.size} {...props}>{props.children}</Paragraph>)
);

const setupMount = (props = {}) => (
  mount(<Paragraph size={props.size} {...props}>{props.children}</Paragraph>)
);

describe('Paragraph component', () => {
  it('Should render Paragraph', () => {
    const component = setupShallow({
      children: 'این یک متن بلند برای پاراگراف است',
    });
    const Paragraph = findByTestAtrr(component, 'paragraph');
    expect(Paragraph.length).toBe(1);
  });

  it('Should not render Paragraph', () => {
    const component = setupShallow();
    const Paragraph = findByTestAtrr(component, 'paragraph');
    expect(Paragraph.length).toBe(0);
  });

  it('Should render Paragraph with font-size 14 and proper line-height', () => {
    const Paragraph = setupMount({
      children: 'این یک متن بلند برای پاراگراف است',
    });
    expect(Paragraph).toHaveStyleRule('font-size', `${theme.typography.baseSize}px`);
    expect(Paragraph).toHaveStyleRule('line-height', `${theme.typography.baseSize * theme.typography.lineHeightRatio}px`);
  });

  it('Should render Paragraph with font-size 15', () => {
    const Paragraph = setupMount({
      children: 'این یک متن بلند برای پاراگراف است',
      size: 15,
    });
    expect(Paragraph).toHaveStyleRule('font-size', '15px');
  });
});
