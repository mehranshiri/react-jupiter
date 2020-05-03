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
});
