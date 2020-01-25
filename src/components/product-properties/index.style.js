import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? 'row' : 'column')};
`;
