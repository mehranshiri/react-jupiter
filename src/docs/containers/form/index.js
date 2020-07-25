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
    <TextInput htmlElementName="text-name-01" label="این لیبل است" />
    <Br />
    <TextInput htmlElementName="text-name-0100" />
    <Br />
    <TextInput htmlElementName="text-name" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" />
    <Br />
    <TextInput htmlElementName="disable" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" disabled />
    <Br />
    <TextInput htmlElementName="with-desc" label="این لیبل است" placeholder="متن مورد نظر خود را وارد کنید" description="توضیحات کم و بیش" />
    <Br />
    <TextInput type="password" htmlElementName="pass-input" label="این لیبل است" />
    <Br />
    <TextInput type="password" htmlElementName="err-example" label="این لیبل است" errorMessage="ارور زیبا بود در این زمانه بلا" />
    <Br />

  </>
);

export default FormPage;
