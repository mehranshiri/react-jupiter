import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

import CardTemplate from '../card-template';
import { Text, Heading } from '../../typography';
import Icon from '../../icon';


/* Common event card styles */

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
`;

export const DateBookmarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BookmarkIcon = styled(Icon)`
  margin-left: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled(Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


/* Vertical event card styles */

export const VerticalCover = styled.img`
  width: 100%;
  height: auto;
`;

export const VerticalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  height: 200px;
`;

export const OrganizationLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const OrganizationName = styled(Text)`
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


/* Horizontal event card styles */

export const HorizontalCardContainer = styled(CardTemplate)`
  height: 116px;
`;

export const HorizontalCover = styled.img`
  width: 206px;
  min-width: 206px;
  height: auto;
`;

export const HorizontalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  flex: 1;
  min-width: 250px;
`;
