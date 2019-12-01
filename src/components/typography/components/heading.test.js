import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';


import Heading from './heading';
import { findByTestAtrr } from '../../utils';
import theme from '../../themes';

const setupShallow = (props = {}) => (
  shallow(<Heading level={props.level} {...props}>{props.children}</Heading>)
);

const setupMount = (props = {}) => (
  mount(<Heading level={props.level} {...props}>{props.children}</Heading>)
);

describe('Heading component', () => {
  it('Should render large H1 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 1 });
    const H1 = findByTestAtrr(component, 'h1-tag');
    expect(H1.length).toBe(1);
  });

  it('Should render large H1 component without error', () => {
    const H1 = setupMount({ children: 'تست', level: 1 });
    expect(H1).toHaveStyleRule('font-size', `${theme.typography.h1SizeLarge}px`);
    expect(H1).toHaveStyleRule('line-height', `${theme.typography.h1SizeLarge * theme.typography.lineHeightRatio}px`);
    expect(H1).toHaveStyleRule('color', theme.typography.baseColor);
    H1.unmount();
  });

  it('Should render H2 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 2 });
    const H2 = findByTestAtrr(component, 'h2-tag');
    expect(H2.length).toBe(1);
  });

  it('Should render small H5 component without error', () => {
    const H2 = setupMount({ children: 'تست', level: 2, size: 'small' });
    expect(H2).toHaveStyleRule('font-size', `${theme.typography.h2SizeSmall}px`);
    expect(H2).toHaveStyleRule('line-height', `${theme.typography.h2SizeSmall * theme.typography.lineHeightRatio}px`);
    expect(H2).toHaveStyleRule('color', theme.typography.baseColor);
    H2.unmount();
  });

  it('Should render H3 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 3 });
    const H3 = findByTestAtrr(component, 'h3-tag');
    expect(H3.length).toBe(1);
  });

  it('Should render small H5 component without error', () => {
    const H3 = setupMount({ children: 'تست', level: 3, size: 'large' });
    expect(H3).toHaveStyleRule('font-size', `${theme.typography.h3SizeLarge}px`);
    expect(H3).toHaveStyleRule('line-height', `${theme.typography.h3SizeLarge * theme.typography.lineHeightRatio}px`);
    expect(H3).toHaveStyleRule('color', theme.typography.baseColor);
    H3.unmount();
  });

  it('Should render H4 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 4 });
    const H4 = findByTestAtrr(component, 'h4-tag');
    expect(H4.length).toBe(1);
  });

  it('Should render small H5 component without error', () => {
    const H4 = setupMount({ children: 'تست', level: 4, size: 'small' });
    expect(H4).toHaveStyleRule('font-size', `${theme.typography.h4SizeSmall}px`);
    expect(H4).toHaveStyleRule('line-height', `${theme.typography.h4SizeSmall * theme.typography.lineHeightRatio}px`);
    expect(H4).toHaveStyleRule('color', theme.typography.baseColor);
    H4.unmount();
  });

  it('Should render H5 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 5 });
    const H5 = findByTestAtrr(component, 'h5-tag');
    expect(H5.length).toBe(1);
  });

  it('Should render small H5 component without error', () => {
    const H5 = setupMount({ children: 'تست', level: 5, size: 'small' });
    expect(H5).toHaveStyleRule('font-size', `${theme.typography.h5SizeSmall}px`);
    expect(H5).toHaveStyleRule('line-height', `${theme.typography.h5SizeSmall * theme.typography.lineHeightRatio}px`);
    expect(H5).toHaveStyleRule('color', theme.typography.baseColor);
    H5.unmount();
  });

  it('Should render H6 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 6 });
    const H6 = findByTestAtrr(component, 'h6-tag');
    expect(H6.length).toBe(1);
  });

  it('Should render medium H6 component without error', () => {
    const H6 = setupMount({ children: 'تست', level: 6, size: 'medium' });
    expect(H6).toHaveStyleRule('font-size', `${theme.typography.h6SizeMedium}px`);
    expect(H6).toHaveStyleRule('line-height', `${theme.typography.h6SizeMedium * theme.typography.lineHeightRatio}px`);
    expect(H6).toHaveStyleRule('color', theme.typography.baseColor);
    H6.unmount();
  });


  it('Should not render H1 when children prop is undefined', () => {
    const component = setupShallow({ level: 1 });
    const H1 = findByTestAtrr(component, 'h1-tag');
    expect(H1.length).toBe(0);
  });

  it('Level prop should be between 1 and 5', () => {
    const H1 = setupMount({ children: 'تست', level: 1 });
    expect(H1.prop('level')).toBeGreaterThanOrEqual(1);
    expect(H1.prop('level')).toBeLessThanOrEqual(5);
    H1.unmount();
  });

  it('Should render H1 when level prop is undefined', () => {
    const component = setupShallow({ children: 'تست' });
    const H1 = findByTestAtrr(component, 'h1-tag');
    expect(H1.length).toBe(1);
  });
});
