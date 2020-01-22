import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Heading } from '../typography';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  height: 45px;
  overflow: hidden;
`;

export const Title = styled(Heading)`
  margin: 8px 8px 8px 0;
  max-height: 45px;
  overflow: hidden;
`;

export const Link = styled(ReactRouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
