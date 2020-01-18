import React from 'react';

import { Typography, Form } from '../../../components';

const { Heading } = Typography;
const { Input } = Form;

const FormPage = () => (
  <>
    <Heading level={1}>
      المان های فرم
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      input
    </Heading>
    <Input />
    <br />

  </>
);

export default FormPage;
