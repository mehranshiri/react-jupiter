import style from 'styled-components';

export const MenuWrapper = style.ol`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  li {
    cursor: pointer;
  }
`;

export const MenuListItem = style.li`
  flex-shrink: 1;
  min-width: ${({ theme }) => theme.itemMinWidth};
  box-sizing: border-box;
  ${({ isShowMoreItem }) => (isShowMoreItem ? 'position: relative;' : '')}
`;


export const ExtraMenuWrapper = style.ol`
  opacity: ${({ showMore }) => (showMore ? '1' : '0')};
  transition: opacity ${({ theme }) => `${theme.animation.time}s ${theme.animation.method}`};
  position: absolute;
  background: ${({ theme }) => theme.bgColor};

  li {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    min-width: ${({ theme }) => theme.itemMinWidth};
  }
`;

export const Nav = style.nav`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;
