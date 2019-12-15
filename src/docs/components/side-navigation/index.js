import React from 'react';
import PropTypes from 'prop-types';
import { SideNav, Nav, NavContext } from 'react-sidenav';

import {
  Container, NavTitle, NavItemContainer, NavItemTitle, Link,
} from './index.styles';

const NavItem = (props) => {
  const context = React.useContext(NavContext);
  const { selected } = context;
  const { title, ltr } = props;
  return (
    <NavItemContainer selected={selected} ltr={ltr}>
      <NavItemTitle>{title}</NavItemTitle>
    </NavItemContainer>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  ltr: PropTypes.bool,
};

NavItem.defaultProps = {
  ltr: false,
};


const SideNavigation = ({ ltr }) => (
  <Container ltr={ltr}>
    <NavTitle>معرفی</NavTitle>
    <SideNav defaultSelectedPath="1">
      <Nav id="1">
        <Link to="/">
          <NavItem title="چرا؟" ltr={ltr} />
        </Link>
      </Nav>
      <Nav id="2">
        <Link to="/components/button">
          <NavItem title="ویژگی‌ها" ltr={ltr} />
        </Link>
      </Nav>
      <Nav id="3">
        <NavItem title="منابع" ltr={ltr} />
      </Nav>
      <NavTitle>شروع و راه اندازی</NavTitle>
      <Nav id="4">
        <NavItem title="نصب" ltr={ltr} />
      </Nav>
      <Nav id="5">
        <NavItem title="راه اندازی" ltr={ltr} />
      </Nav>
      <NavTitle>کامپوننت‌ها</NavTitle>
      <Nav id="6">
        <NavItem title="آیکون‌ها" ltr={ltr} />
      </Nav>
      <Nav id="7">
        <NavItem title="تایپوگرافی" ltr={ltr} />
      </Nav>
      <Nav id="8">
        <NavItem title="دکمه‌ها" ltr={ltr} />
      </Nav>
      <Nav id="9">
        <Link to="/components/avatar">
          <NavItem title="آواتار" ltr={ltr} />
        </Link>
      </Nav>
    </SideNav>
  </Container>
);

SideNavigation.propTypes = {
  ltr: PropTypes.bool,
};

SideNavigation.defaultProps = {
  ltr: false,
};

export default SideNavigation;
