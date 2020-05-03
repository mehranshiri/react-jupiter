import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAtrr } from '../../../utils/test';
import FileItem from './index';

const setupShallow = (props = {}) => (
  shallow(<FileItem data={props.data} {...props} />)
);

const setupMount = (props = {}) => (
  mount(<FileItem data={props.data} {...props} />)
);

describe('file-item test', () => {
  it('file item existance', () => {
    const component = setupShallow();
    const TheFileItem = findByTestAtrr(component, 'file-item');

    expect(TheFileItem.length).toBe(1);
  });

  it('file item should have related image', () => {
    const component = setupMount({ type: 'doc' });
    const TheDocFileImage = component.find(".icon-doc-light[data-test='file-image']");
    const TheZipFileImage = component.find(".icon-zip-light[data-test='file-image']");

    expect(TheDocFileImage.length).not.toBe(0);
    expect(TheZipFileImage.length).toBe(0);
  });

  it('file item should have title as a large h5', () => {
    const component = setupShallow();
    const Title = findByTestAtrr(component, 'file-item-title');

    expect(Title.length).toBe(1);
    expect(Title.props().level).toBe(5);
    expect(Title.props().size).toBe('lg');
  });

  it('file item should have title as the same of what we passed', () => {
    const component = setupShallow({ title: 'فایل های کاربردی' });
    const Title = findByTestAtrr(component, 'file-item-title');

    expect(Title.props().children).toBe('فایل های کاربردی');
  });
});
