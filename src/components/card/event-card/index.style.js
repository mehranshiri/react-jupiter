import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Text, Heading } from '../../typography';
import Icon from '../../icons';

export const SquareCover = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

export const SquareContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  height: 200px;
`;

export const SquareDateBookmarkContainer = styled.div`
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

export const PlacePriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  div {
    width: 50%;
  }
`;

export const PlacePriceIcon = styled(Icon)`
  margin-right: 0;
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
