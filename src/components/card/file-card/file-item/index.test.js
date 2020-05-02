import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../utils/test';
import FileItem from './index';

const setupShallow = (props = {}) => (
  shallow(<FileItem data={props.data} {...props} />)
);

describe('file-item test', () => {
  it('file item existance', () => {
    const component = setupShallow();
    const TheFileItem = findByTestAtrr(component, 'file-item');

    expect(TheFileItem.length).toBe(1);
  });

  it('file item should have related image', () => {
    const component = setupShallow({ type: 'doc' });
    const TheDocFileImage = component.find(".icon-doc-light[data-test='file-image']");
    const TheZipFileImage = component.find(".icon-zip-light[data-test='file-image']");

    expect(TheDocFileImage.length).toBe(1);
    expect(TheZipFileImage.length).toBe(0);
  });
});
