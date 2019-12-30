import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import ButtonPage from './index';

describe('snapshot testing for all examples on doc page', () => {
  it('mainButton', () => {
    const wrapper = render(<ButtonPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
