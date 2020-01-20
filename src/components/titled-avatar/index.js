// @flow

import React from 'react';
import Avatar from '../avatar';
import { Container, Title } from './index.style';

type Props = {
  title: string,
  avatar: string,
};

const TitledAvatar = (props: Props) => {
  const { title, avatar } = props;

  return (
    <Container data-test="titled-avatar">
      <Avatar src={avatar} />
      <Title level={4} size="sm">{title}</Title>
    </Container>
  );
};

export default TitledAvatar;
