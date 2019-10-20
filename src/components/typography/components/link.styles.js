import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InternalLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue600};
  &:hover {
    text-decoration: underline;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue600};
  &:hover {
    text-decoration: underline;
  }
`;
