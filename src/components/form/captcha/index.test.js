import React from 'react';
import { shallow } from 'enzyme';
import findByTestAtrr from '../../utils/test';
import Captcha from './index';

describe('captcha', () => {
  it('render caqptcha input', () => {
    const component = shallow(<Captcha />);
    const chaptchaBox = findByTestAtrr(component, 'captcha-box');

    expect(chaptchaBox.length).toBe(1);
  });
});
