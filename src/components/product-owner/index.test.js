import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils/test';
import ProductOwner from './index';

describe('ProductOwner Tests', () => {
  it('render ProductOwner', () => {
    const component = shallow(<ProductOwner />);
    const productOwner = findByTestAtrr(component, 'product-owner');

    expect(productOwner.length).toBe(1);
  });
});
