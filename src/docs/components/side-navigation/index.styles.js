import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  top: 70px;;
  background: #fff;
  min-width: 180px;
  color: #444;
  ${({ ltr }) => (ltr ? 'border-right: 1px solid #e5e5e5' : 'border-left: 1px solid #e5e5e5')}
`;


export const NavTitle = styled.div`
  padding: 8px;
  margin-bottom: -8px;
  font-size: 0.92em;
  color: #a5a5a5;
`;

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  background: ${(props) => (props.selected ? '#F5F5F5' : 'inherit')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${({ ltr, selected }) => (!ltr
    ? `border-right: 4px solid ${selected ? '#DE0A5F' : 'transparent'}`
    : `border-left: 4px solid ${selected ? '#DE0A5F' : 'transparent'}`
  )}
  &:hover {
    background: #f5f5f5;
  }
`;
export const NavItemTitle = styled.div`
  padding-left: 6px;
  line-height: 22px;
`;

export const Link = styled(RouterLink)`
  color: #444;
  text-decoration: none;
`;
