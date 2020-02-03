import React from 'react';
import styled from 'styled-components';
import { Typography, ProductProperties, ProductOwner } from '../../../components';

const { Heading } = Typography;

const Container = styled.div`
  margin: 8px;
`;

const ProductPage = () => (
  <>
    <Heading level={1}>
      کامپوننت های product
    </Heading>
    <br />

    <Heading level={2}>
      product-properties
    </Heading>
    <br />
    <Container>
      <Heading level={3}>
        single property
      </Heading>
      <ProductProperties list={[{ iconName: 'watch-later', text: 'watch text' }]} />
    </Container>
    <br />

    <Container>
      <Heading level={3}>
        multiple property
      </Heading>
      <ProductProperties
        list={[
          { iconName: 'watch-later', text: 'متن زیبا' },
          { iconName: 'alarm-off', text: 'متن دیگری' },
          { iconName: 'aspect-ratio', text: 'و باز هم متن دیگری' },
        ]}
      />
    </Container>
    <br />

    <Container>
      <Heading level={3}>
        horizontal property
      </Heading>
      <ProductProperties
        isHorizontal
        list={[
          { iconName: 'watch-later', text: 'متن زیبا' },
          { iconName: 'alarm-off', text: 'متن دیگری' },
          { iconName: 'aspect-ratio', text: 'و باز هم متن دیگری' },
        ]}
      />
    </Container>
    <br />

    <Heading level={2}>
        product-owner
    </Heading>
    <br />
    <Container>
      <Heading level={3}>
        product-owner
      </Heading>
      <ProductOwner
        name="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی
        انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی"
        onClickFollowMe={() => { window.console.log('Follow Me Button Clicked'); }}
        onClickConnectUs={() => { window.console.log('Connect Us Button Clicked'); }}
        onClickDescription={() => { window.console.log('Description Button Clicked'); }}
      />
      <br />
    </Container>
    <br />

  </>
);

export default ProductPage;
