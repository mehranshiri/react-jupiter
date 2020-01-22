import React from 'react';
import styled from 'styled-components';
import { Typography, ProductProperties } from '../../../components';

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
      product-property
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

  </>
);

export default ProductPage;
