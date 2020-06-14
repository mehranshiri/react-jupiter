import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import findByTestAtrr from '../utils/test';
import Cover from './index';

describe('Cover', () => {
  it('should render correctly(simple-cover)', () => {
    const component = shallow(<Cover />);
    const cover = findByTestAtrr(component, 'cover');
    expect(cover.length).toBe(1);
  });

  it('should render correctly(external link-cover)', () => {
    const component = shallow(<Cover linkTo="http://yahoo.com" />);
    const cover = findByTestAtrr(component, 'cover');
    expect(cover.length).toBe(1);
  });

  it('should render correctly(internal link-cover)', () => {
    const component = shallow(<Cover renderLink={(element) => <Link to="/components/card">{element}</Link>} />);
    const cover = findByTestAtrr(component, 'cover');
    expect(cover.length).toBe(1);
  });
});
