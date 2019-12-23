import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import MainButtonPage from './index';

describe('snapshot testing for all examples on doc page', () => {
  it('mainButton', () => {
    const wrapper = render(<MainButtonPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
