import React from 'react';
import styled from 'styled-components';
import { Typography, Form } from '../../../components';

const { Heading } = Typography;
const { TextInput } = Form;

const Br = styled.br`
  margin: 8px;
`;

const FormPage = () => (
  <>
    <Heading level={1}>
      المان های فرم
    </Heading>
    <Br />
    <Br />

    <Heading level={2}>
      TextInput
    </Heading>
    <TextInput uniqueName="text-name-01" label="این لیبل است" />
    <Br />
    <TextInput uniqueName="text-name" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" />
    <Br />
    <TextInput uniqueName="disable" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" disabled />
    <Br />
    <TextInput uniqueName="with-desc" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" description="توضیحات کم و بیش" />
    <Br />
    <TextInput type="password" uniqueName="pass-input" label="این لیبل است" />
    <Br />
    <Br />

  </>
);

export default FormPage;
