import React from 'react';
import { mount } from 'enzyme';
import { findByTestAtrr } from '../../utils/test';
import TextInput from './text-input';

describe('text input tests', () => {
  it('render simple text input', () => {
    const component = mount(<TextInput label="this is label" name="eng name" />);
    const textInput = findByTestAtrr(component, 'text-input');
    expect(textInput.length).toBe(1);
  });

  it('render text input with placeholder', () => {
    const component = mount(<TextInput label="this is label" name="eng name" placeholder="hi guys" />);
    const textInput = findByTestAtrr(component, 'text-input');
    expect(textInput.find('input').prop('placeholder')).toBe('hi guys');
  });

  it('test text input id without id props', () => {
    const component = mount(<TextInput label="this is label" name="eng name" placeholder="hi guys" />);
    const textInput = findByTestAtrr(component, 'text-input');
    expect(textInput.find('input').prop('id')).toBe('text-engname-thisislabel');
  });

  it('render text input - full props', () => {
    const component = mount(<TextInput label="this is label" name="eng name" placeholder="hi guys" type="text" id="hiiii-id" />);
    const textInput = findByTestAtrr(component, 'text-input');
    expect(textInput.find('input').prop('id')).toBe('hiiii-id');
    expect(textInput.find('input').prop('type')).toBe('text');
    expect(textInput.find('input').prop('placeholder')).toBe('hi guys');
    expect(textInput.find('input').prop('name')).toBe('eng name');
    expect(textInput.length).toBe(1);
  });

  // it('set entered text as value', () => {
  //   const component = shallow(<TextInput label="this is label" name="eng-name" />);
  //   const textInput = findByTestAtrr(component, 'text-input');
  //   textInput.find('input').simulate('change', { target: { value: 'My new value' } });
  //   // textInput.find('input').simulate('keypress', { which: 'entered text' });
  //   component.update();
  //   // textInput.find('input').simulate('keypress', { which: 'entered text' });
  //   expect(textInput.find('input').prop('value')).toBe('entered text');
  // });
});
