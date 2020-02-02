// @flow

import React from 'react';
import defaultImage from '../assets/defaults-images/Cover_default.jpg';
import { Container, Image } from './index.style';

type Props = {
  src?: string,
  alt?: string,
  linkTo?: string,
  linkTarget?: '_self' | '_blank',
  renderLink?: * => Node,
}

const Cover = (props: Props) => {
  const {
    src,
    alt,
    linkTo,
    linkTarget,
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
        <a href={linkTo} target={linkTarget}>
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
  linkTarget: '_blank',
};

export default Cover;
