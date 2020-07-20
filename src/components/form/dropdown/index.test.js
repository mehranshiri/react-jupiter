import React from 'react';
import { shallow } from 'enzyme';
import findByTestAtrr from '../../utils/test';
import Select from './select';
import SelectOption from './option';

describe('dropdown (select-option) tests', () => {
  it('render simple select tag', () => {
    const component = shallow(<Select />);
    const select = findByTestAtrr(component, 'select');

    expect(select.length).toBe(1);
  });
  it('render simple option tag', () => {
    const component = shallow(<SelectOption label="hi" value="hi_val" />);
    const option = findByTestAtrr(component, 'select-option');

    expect(option.length).toBe(1);
  });
});
