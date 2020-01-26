import React from 'react';

import { Typography, Form } from '../../../components';

const { Heading } = Typography;
const { TextInput } = Form;

const FormPage = () => (
  <>
    <Heading level={1}>
      المان های فرم
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      TextInput
    </Heading>
    <TextInput name="text-name" label="این لیبل است" />
    <TextInput name="text-name" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" />
    <br />

  </>
);

export default FormPage;
