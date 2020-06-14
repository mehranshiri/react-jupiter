import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Link from './index';
import findByTestAtrr from '../../utils/test';

const setupShallow = (props = {}) => (
  shallow(
    <Link
      external={props.external}
      target={props.target}
      size={props.size}
      strong={props.strong}
      emphasized={props.emphasized}
      {...props}
    >
      {props.children}
    </Link>,
  )
);

describe('Link component', () => {
  it('Should not render any thing', () => {
    const component = setupShallow({
      children: 'لینک داخلی',
    });
    const Link = findByTestAtrr(component, 'internal-link');
    expect(Link.length).toBe(0);
  });

  it('Should render an internal Link', () => {
    const component = setupShallow({
      children: 'لینک داخلی',
      to: 'http://google.com',
    });
    const Link = findByTestAtrr(component, 'internal-link');
    expect(Link.length).toBe(1);
  });

  it('Should render an internal Link when external prop false', () => {
    const component = setupShallow({
      children: 'لینک داخلی',
      to: 'http://google.com',
      external: false,
    });
    const Link = findByTestAtrr(component, 'internal-link');
    expect(Link.length).toBe(1);
  });

  it('Should render an internal Link when external prop is true', () => {
    const component = setupShallow({
      children: 'لینک خارجی',
      to: 'http://google.com',
      external: true,
    });
    const Link = findByTestAtrr(component, 'external-link');
    expect(Link.length).toBe(1);
  });
});
