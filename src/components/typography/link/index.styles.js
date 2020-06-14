import styled from 'styled-components';

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue600};
`;

export default ExternalLink;
