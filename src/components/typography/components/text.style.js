import styled from 'styled-components';

const stringColorBasedOnType = (theme, type) => {
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

export const String = styled.span`
  color: ${({ theme, type }) => stringColorBasedOnType(theme, type)};
  font-weight: ${({ weight }) => (weight)};
  font-size: ${({ size }) => (`${size}px`)};
  ${({ underline }) => (underline ? 'text-decoration: underline' : '')}
  ${({ remove }) => (remove ? 'text-decoration:  line-through' : '')}
`;
