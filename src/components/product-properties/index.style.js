import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? 'row' : 'column')};
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
    margin: 2px 0;
    min-width: calc(100% / ${({ propsLength }) => propsLength});
    &:first-child { margin-top: 0; }
    &:last-child { margin-bottom: 0; }

`;
