// @flow

import React from 'react';
import defaultImage from '../assets/defaults-images/Cover_default.jpg';
import { Container, Image } from './index.style';

type Props = {
  src?: string,
  alt?: string,
  linkTo?: string,
  renderLink?: * => Node,
}

const Cover = (props: Props) => {
  const {
    src,
    alt,
    linkTo,
    renderLink,
    ...rest
  } = props;

  const renderCover = () => (
    <Image src={src} alt={alt} data-test="cover" {...rest} />
  );

  if (renderLink) {
    return (
      <Container>
        {renderLink(renderCover())}
      </Container>
    );
  }
  if (linkTo) {
    return (
      <Container>
        <a href={linkTo}>
          {renderCover()}
        </a>
      </Container>
    );
  }
  return (renderCover());
};

Cover.defaultProps = {
  alt: 'کاور',
  src: defaultImage,
  renderLink: null,
  linkTo: null,
};

export default Cover;
