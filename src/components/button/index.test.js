import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { findByTestAtrr } from '../utils/testUtils';
import Button from './index';

describe('mainButton', () => {
  it('render simple default mainButton component', () => {
    const component = mount(<Button>my simple button</Button>);

    expect(component.text()).toBe('my simple button');
    expect(component.props().htmlType).toBe('submit');
  });

  it('render iconic mainButton component', () => {
    const component = render(
      <Button icon="watch-later">
        دکمه آیکون دار
      </Button>,
    );
    const iconWrapper = findByTestAtrr(component, 'icon');

    expect(iconWrapper.length).toBe(1);
  });
});

describe('Button(snapshot testing)', () => {
  it('Button-default', () => {
    const wrapper = render(<Button>my simple button</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('full-width button', () => {
    const wrapper = render(<Button wide>my wide button</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Button sizes', () => {
    const component1 = render(<Button size="sm">my small button</Button>);
    const component2 = render(<Button size="md">my default size(md) button</Button>);
    const component3 = render(<Button size="lg">my large button</Button>);

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
  });

  it('green Buttons', () => {
    const component1 = render(<Button styleType="primary" mainColor="green">my primary button</Button>);
    const component2 = render(<Button styleType="secondary" mainColor="green">my secoundrry button</Button>);
    const component3 = render(<Button styleType="tertiary" mainColor="green">my tertiary button</Button>);

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
  });

  it('yellow Buttons', () => {
    const component1 = render(<Button styleType="primary" mainColor="yellow">my primary button</Button>);
    const component2 = render(<Button styleType="secondary" mainColor="yellow">my secoundrry button</Button>);
    const component3 = render(<Button styleType="tertiary" mainColor="yellow">my tertiary button</Button>);

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
  });

  it('red Buttons', () => {
    const component1 = render(<Button styleType="primary" mainColor="red">my primary button</Button>);
    const component2 = render(<Button styleType="secondary" mainColor="red">my secoundrry button</Button>);
    const component3 = render(<Button styleType="tertiary" mainColor="red">my tertiary button</Button>);

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
  });

  it('blue Buttons', () => {
    const component1 = render(<Button styleType="primary" mainColor="blue">my primary button</Button>);
    const component2 = render(<Button styleType="secondary" mainColor="blue">my secoundrry button</Button>);
    const component3 = render(<Button styleType="tertiary" mainColor="blue">my tertiary button</Button>);

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
  });

  it('darkblue Buttons(default)', () => {
    const component1 = render(<Button styleType="primary" mainColor="darkblue">my primary button</Button>);
    const component2 = render(<Button styleType="secondary" mainColor="darkblue">my secoundrry button</Button>);
    const component3 = render(<Button styleType="tertiary" mainColor="darkblue">my tertiary button</Button>);
    const component4 = render(<Button styleType="primary">my primary button</Button>);
    const component5 = render(<Button styleType="secondary">my secoundrry button</Button>);
    const component6 = render(<Button styleType="tertiary">my tertiary button</Button>);

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
    expect(toJson(component4)).toMatchSnapshot();
    expect(toJson(component5)).toMatchSnapshot();
    expect(toJson(component6)).toMatchSnapshot();
  });

  it('disabled Buttons', () => {
    const component1 = render(<Button styleType="primary" mainColor="blue" icon="watch-later" disabled>my blue iconic disabled primary button</Button>);
    const component2 = render(<Button styleType="secondary" mainColor="red" disabled>my red disabled secoundrry button</Button>);
    const component3 = render(<Button styleType="tertiary" disabled>my disabled tertiary button</Button>);
    const component4 = render(
      <Router>
        <Button styleType="primary" linkTo="/avatar" disabled>my disabled primary linked-button</Button>
      </Router>,
    );

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
    expect(toJson(component4)).toMatchSnapshot();
  });

  it('linked Buttons', () => {
    const component1 = render(
      <Router>
        <Button linkTo="/avatar">my simplest linked button</Button>
      </Router>,
    );
    const component2 = render(
      <Router>
        <Button
          styleType="secondary"
          icon="watch-later"
          linkTo="https://sciencebusiness.net/categories/dfgdfg"
          linkType="external"
          linkTarget="_blank"
        >
          my secoundrry external-linked button
        </Button>
      </Router>,
    );
    const component3 = render(
      <Router>
        <Button
          styleType="tertiary"
          icon="watch-later"
          linkTo="/avatar"
          linkType="internal"
          linkTarget="_self"
        >
          my tertiary internal-liked button
        </Button>
      </Router>,
    );

    expect(toJson(component1)).toMatchSnapshot();
    expect(toJson(component2)).toMatchSnapshot();
    expect(toJson(component3)).toMatchSnapshot();
  });
});
