import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAtrr } from '../utils/test';
import ProductOwner from './index';
import { StyledButton } from './index.style';

describe('ProductOwner Tests', () => {
  it('render ProductOwner', () => {
    const component = shallow(<ProductOwner />);
    const productOwner = findByTestAtrr(component, 'product-owner');

    expect(productOwner.length).toBe(1);
  });

  it('check connectUs button order and its functionality', () => {
    let isConnectUsFunctionCalled = false;
    function connectUsFunc() { isConnectUsFunctionCalled = !isConnectUsFunctionCalled; }

    const component = shallow(
      <ProductOwner
        name="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی
        انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی"
        onClickConnectUs={connectUsFunc}
      />,
    );
    const productOwner = findByTestAtrr(component, 'product-owner');
    const followmeButton = productOwner.find(StyledButton).at(0);
    const connectUsButton = productOwner.find(StyledButton).at(1);
    const descriptionButton = productOwner.find(StyledButton).at(2);

    expect(followmeButton.text()).toContain('دنبال');
    expect(connectUsButton.text()).toContain('تماس');
    expect(descriptionButton.text()).toContain('توضیحات');
    expect(isConnectUsFunctionCalled).toBe(false);

    expect(isConnectUsFunctionCalled).toBe(false);

    connectUsButton.simulate('click');

    expect(isConnectUsFunctionCalled).toBe(true);
  });

  it('check follow button place and its functionality', () => {
    let isFollowMeFunctionCalled = false;
    function followMeFunc() {
      isFollowMeFunctionCalled = !isFollowMeFunctionCalled;
      return isFollowMeFunctionCalled;
    }

    const component = mount(
      <ProductOwner
        name="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی
        انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی"
        onClickFollowMe={followMeFunc}
      />,
    );
    const productOwner = findByTestAtrr(component, 'product-owner');
    const followmeButton = productOwner.find(StyledButton).at(0);

    expect(followmeButton.text()).toContain('دنبال');
    expect(isFollowMeFunctionCalled).toBe(false);
    expect(followmeButton.props().styleType).toBe('primary');

    followmeButton.simulate('click');

    expect(isFollowMeFunctionCalled).toBe(true);

    // TODO: try to solve the problem of use '.state()' on hooks
    // I cant use just 'followmeButton.props().styleType' az expect
    // argument because the followmeButton's props doesnt update after click
    // plus I cant check component.state() with enzyme because
    // it doesnt support hooks('.state()' only work with class)
    // expect(component.find(StyledButton).at(0).props().styleType).toBe('secondary');
  });
});
