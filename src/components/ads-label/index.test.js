import React from 'react';
import { shallow } from 'enzyme';

import AdsLabel from './index';
import { findByTestAtrr } from '../utils/test';

const setupShallow = () => (
  shallow(<AdsLabel />)
);

describe('AdsLabel component', () => {
  it('Should render without error', () => {
    const component = setupShallow();
    const AdsLabel = findByTestAtrr(component, 'ads-label');
    expect(AdsLabel.length).toBe(1);
  });
});
