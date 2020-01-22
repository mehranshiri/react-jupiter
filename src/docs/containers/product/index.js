import React from 'react';

import { Typography, ProductProperty } from '../../../components';

const { Heading } = Typography;

const ProductPage = () => (
  <>
    <Heading level={1}>
      کامپوننت های product
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      product-property
    </Heading>
    <ProductProperty iconName="watch-later" text="watch text" />
    <br />

  </>
);

export default ProductPage;
