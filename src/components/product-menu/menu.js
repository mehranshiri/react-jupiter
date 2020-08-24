import React from 'react';
import { MenuWrapper } from './index.style';

type Props = {
  children: * => Node,
}
function Menu(props : Props) {
  const { children } = props;
  // const menuItems = React.Children.toArray(children);

  return (
    <nav data-test="product-menu">
      <MenuWrapper>
        {/* {menuItems.map(
          (menuItem, index) => (
            <li key={index}>
              {React.cloneElement(menuItem)}
            </li>
          ),
        )} */}
        {children}
      </MenuWrapper>
    </nav>
  );
}
export default Menu;
