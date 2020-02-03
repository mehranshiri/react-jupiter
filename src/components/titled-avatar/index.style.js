import styled from 'styled-components';
import { Heading, Text } from '../typography';
import globalTheme from '../themes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const TitleContainer = styled.div`
  height: 45px;
  overflow: hidden;
`;

export const Title = styled(Heading)`
  margin: 8px 8px 8px 0;
  max-height: ${({ size }) => (size === globalTheme.sizes.medium ? '45px' : '88px')};
  overflow: hidden;
`;

export const SmallTitle = styled(Text)`
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
