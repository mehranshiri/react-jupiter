import styled from 'styled-components';

import { Text } from '../../typography';

export const SquareCover = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

export const SquareContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const SquareDateBookmarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled(Text)`

`;
