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
    <TextInput name="text-name-01" label="این لیبل است" />
    <TextInput name="text-name" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" />
    <TextInput name="disable" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" disabled />
    <br />

  </>
);

export default FormPage;
