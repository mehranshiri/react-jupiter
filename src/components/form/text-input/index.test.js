import React from 'react';
import { mount, shallow } from 'enzyme';
import findByTestAtrr from '../../utils/test';
import TextInput from './index';

describe('text input tests', () => {
  it('render simple text input', () => {
    const component = shallow(<TextInput label="this is label" uniqueName="eng name" />);
    const textInput = findByTestAtrr(component, 'text-input');

    expect(textInput.length).toBe(1);
  });

  it('render text input with placeholder', () => {
    const component = mount(<TextInput label="this is label" uniqueName="eng name" placeholder="hi guys" />);
    const textInput = findByTestAtrr(component, 'text-input');

    expect(textInput.find('input').prop('placeholder')).toBe('hi guys');
  });

  it('test text input id without id props', () => {
    const component = mount(<TextInput label="this is label" uniqueName="eng name" placeholder="hi guys" />);
    const textInput = findByTestAtrr(component, 'text-input');

    expect(textInput.find('input').prop('id')).toBe('text-engname');
  });

  it('render text input - full props', () => {
    const component = mount(<TextInput label="this is label" uniqueName="eng name" placeholder="hi guys" type="text" id="hiiii-id" />);
    const textInput = findByTestAtrr(component, 'text-input');

    expect(textInput.find('input').prop('id')).toBe('hiiii-id');
    expect(textInput.find('input').prop('type')).toBe('text');
    expect(textInput.find('input').prop('placeholder')).toBe('hi guys');
    expect(textInput.find('input').prop('name')).toBe('eng name');
    expect(textInput.length).not.toBe(0);
  });

  it('render disabled input', () => {
    const component = mount(<TextInput label="this is label" uniqueName="eng name" disabled />);
    const textInput = findByTestAtrr(component, 'text-input');

    expect(textInput.find('input').prop('disabled')).toBe(true);
  });

  it('render with or without text-input-description', () => {
    const componentWithDesc = shallow(<TextInput label="this is label" uniqueName="with desc" description="hiiiiii" />);
    const componentWithoutDesc = shallow(<TextInput label="this is label" uniqueName="without desc" />);
    const textInputDescription01 = findByTestAtrr(componentWithDesc, 'text-input-description');
    const textInputDescription02 = findByTestAtrr(componentWithoutDesc, 'text-input-description');

    expect(textInputDescription01.length).toBe(1);
    expect(textInputDescription02.length).toBe(0);
  });

  it('render with or err msg', () => {
    const component = shallow(<TextInput label="this is label" uniqueName="with desc" description="hiiiiii" errorMessage="this is a good err" />);
    const textInputErrorMessage = findByTestAtrr(component, 'error-message');

    expect(textInputErrorMessage.length).toBe(1);
    expect(textInputErrorMessage.children().text()).toBe('this is a good err');
  });
});
