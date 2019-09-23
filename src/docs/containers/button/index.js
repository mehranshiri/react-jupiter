import React from 'react';

import Components, { Button, Typography } from '../../../components';

const { Title, Text } = Typography;

const ButtonPage = () => (
  <>
    <div>Button</div>
    <Components.Button1 displayText="پرداخت" />
    <Button props="props value" borderRadius={3} rounded />
    <Title level={3} type="danger">سلام</Title>
    <Text>تکست ساده</Text>
  </>
);

export default ButtonPage;
