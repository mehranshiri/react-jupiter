import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Icon from './index';
import { findByTestAtrr } from '../utils/test';

const setupShallow = (props = {}) => (
  shallow(<Icon type={props.icon} {...props} />)
);

describe('Icon component', () => {
  it('Should render icon component without error', () => {
    const component = setupShallow({ type: 'lock' });
    const Icon = findByTestAtrr(component, 'i-tag');
    expect(Icon.length).toBe(1);
  });

  it('Should not render icon component without type props', () => {
    const component = setupShallow();
    const Icon = findByTestAtrr(component, 'i-tag');
    expect(Icon.length).toBe(0);
  });

  it('should render zoom-out icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="zoom-out" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render zoom-in icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="zoom-in" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render today icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="today" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render assessment icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="assessment" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render aspect-ratio icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="aspect-ratio" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render alarm-on icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="alarm-on" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render alarm-off icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="alarm-off" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render watch-later icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="watch-later" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render touch-app icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="touch-app" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render exit-to-app icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="exit-to-app" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render event-seat icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="event-seat" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render event icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="event" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render description icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="description" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });

  it('should render delete-outline icon correctly', () => {
    const Icons = renderer
      .create(<Icon type="delete-outline" />).toJSON();
    expect(Icons).toMatchSnapshot();
  });
});
