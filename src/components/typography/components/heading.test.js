import React from 'react';
import { shallow, mount } from 'enzyme';


import Heading from './heading';
import { findByTestAtrr } from '../../utils';

const setupShallow = (props = {}) => (
  shallow(<Heading level={props.level} {...props}>{props.children}</Heading>)
);

const setupMount = (props = {}) => (
  mount(<Heading level={props.level} {...props}>{props.children}</Heading>)
);

describe('Heading component', () => {
  it('Should render H1 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 1 });
    const H1 = findByTestAtrr(component, 'h1-tag');
    expect(H1.length).toBe(1);
  });

  it('Should render H2 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 2 });
    const H2 = findByTestAtrr(component, 'h2-tag');
    expect(H2.length).toBe(1);
  });

  it('Should render H3 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 3 });
    const H3 = findByTestAtrr(component, 'h3-tag');
    expect(H3.length).toBe(1);
  });

  it('Should render H4 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 4 });
    const H4 = findByTestAtrr(component, 'h4-tag');
    expect(H4.length).toBe(1);
  });

  it('Should render H5 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 5 });
    const H5 = findByTestAtrr(component, 'h5-tag');
    expect(H5.length).toBe(1);
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
  });

  it('Should render H1 when level prop is undefined', () => {
    const component = setupShallow({ children: 'تست' });
    const H1 = findByTestAtrr(component, 'h1-tag');
    expect(H1.length).toBe(1);
  });
});
