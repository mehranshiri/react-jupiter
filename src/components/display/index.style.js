import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  ${({ justifyContent }) => (justifyContent
    ? `justify-content: ${justifyContent}`
    : ''
  )}
  ${({ alignItems }) => (alignItems
    ? `align-items: ${alignItems}`
    : ''
  )}
`;

export const Block = styled.div`
  display: block;
`;
