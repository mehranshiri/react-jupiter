import React from 'react';
import { shallow } from 'enzyme';

import EventCardLabel from './index';
import { findByTestAtrr } from '../../../utils/test';

const setupShallow = ({ type }) => (
  shallow(<EventCardLabel type={type} />)
);

describe('EventCardLabel component', () => {
  it('Should render ads label', () => {
    const component = setupShallow({ type: 'ads' });
    const AdsLabel = findByTestAtrr(component, 'ads-label');
    expect(AdsLabel.length).toBe(1);
  });

  it('Should render finished label', () => {
    const component = setupShallow({ type: 'finished' });
    const AdsLabel = findByTestAtrr(component, 'finished-label');
    expect(AdsLabel.length).toBe(1);
  });
});
