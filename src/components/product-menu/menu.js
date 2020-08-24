import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../typography';
import { Padding } from '../spacing';
import {
  MenuWrapper,
  MenuListItem,
  ExtraMenuWrapper,
  Nav,
} from './index.style';
import theme from './theme';

type Props = {
  children: * => Node,
}
function Menu(props : Props) {
  const { children } = props;
  const [showMore, setShowMore] = useState(false);
  const menuItems = React.Children.toArray(children);

  function handleToggleShowMore() {
    setShowMore(!showMore);
  }
  function renderMenu() {
    if (menuItems.length > 5) {
      return (
        <>
          {
            menuItems.filter((item, index) => index < 4).map(
              (menuItem) => (
                <MenuListItem key={menuItem.key}>
                  <Padding left={2} right={2}>
                    {React.cloneElement(menuItem)}
                  </Padding>
                </MenuListItem>
              ),
            )
          }
          <MenuListItem isShowMoreItem>
            <Text size={16} bold onClick={handleToggleShowMore}>
              بیشتر
            </Text>
            <ExtraMenuWrapper showMore={showMore}>
              {
                menuItems.filter((item, index) => index >= 4).map(
                  (menuItem) => (
                    <li key={menuItem.key}>
                      <Padding top={4} bottom={4} left={3} right={3}>
                        {React.cloneElement(menuItem)}
                      </Padding>
                    </li>
                  ),
                )
              }
            </ExtraMenuWrapper>
          </MenuListItem>
        </>
      );
    }
    return (
      <>
        {
          menuItems.map(
            (menuItem) => (
              <MenuListItem key={menuItem.key}>
                {React.cloneElement(menuItem)}
              </MenuListItem>
            ),
          )
        }
      </>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Nav data-test="product-menu">
        <Padding top={5} bottom={5}>
          <MenuWrapper>
            {renderMenu()}
          </MenuWrapper>
        </Padding>
      </Nav>
    </ThemeProvider>
  );
}
export default Menu;
