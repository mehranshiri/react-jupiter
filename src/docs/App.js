import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle, { ContentContainer } from './globalStyle';
import Header from './components/header';
import SideNavigation from './components/side-navigation';

import HomePage from './containers/home';
import ButtonPage from './containers/button';
import AvatarPage from './containers/avatar';
import IconPage from './containers/icon';
import TypographyPage from './containers/typography';
import IconsPage from './containers/icons';
import CardPage from './containers/card';
import CoverPage from './containers/cover';
import ProductPage from './containers/product';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  position: relative;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        <SideNavigation />
        <ContentContainer>
          <Route exact path="/" component={HomePage} />
          <Route path="/components/typography" component={TypographyPage} />
          <Route path="/components/avatar" component={AvatarPage} />
          <Route path="/components/icon" component={IconPage} />
          <Route path="/components/button" component={ButtonPage} />
          <Route path="/components/icons" component={IconsPage} />
          <Route path="/components/card" component={CardPage} />
          <Route path="/components/cover" component={CoverPage} />
          <Route path="/components/product" component={ProductPage} />
        </ContentContainer>
      </Content>
    </Container>
  );
}

export default App;
