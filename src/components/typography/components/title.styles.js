import styled from 'styled-components';

const headingColorBasedOnType = (theme, type) => {
  switch (type) {
    case 'danger':
      return 'red';
    case 'success':
      return 'green';
    default:
    case 'default':
      return 'black';
  }
};

export const H1 = styled.h2`
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
`;

export const H2 = styled.h2`
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
`;

export const H3 = styled.h3`
  color: ${({ theme, type }) => headingColorBasedOnType(theme, type)};
`;
