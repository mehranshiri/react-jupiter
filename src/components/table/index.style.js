import styled from 'styled-components';
import { getColorFromName } from '../utils/theme';

export const TableContainer = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
  
    tr {
      border-top: 1px solid;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      padding: 16px;
    }
    
    tbody tr:nth-child(2n-1) {
      background: #f9f9f9;
      td {
        background: #f9f9f9;
      }
    }
    tbody tr:nth-child(2n) {
      background: white;
      td {
        background: white;
      }
    }
  
    th, td {
      width: 177px;
      text-align: right;
      display: inline-flex;
      margin-left: 16px;
    }
  ${({ isResponsiveView, actionColumnNumber }) => {
    if (actionColumnNumber && isResponsiveView) {
      return `
        td:last-child, th:last-child {
          margin-left: 117px;
        }
        td:nth-child(${actionColumnNumber}) {
          position: absolute;
          left: 10px;
          margin: -11px;
          padding-right: 16px;
        }
        th:nth-child(${actionColumnNumber}) {
          background: white;
          position: absolute;
          left: 10px;
          margin: 0 -11px;
          padding-right: 16px;
        }
      `;
    }
    return '';
  }}
  }
`;

export const ShowMoreButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.showMoreColor};
  font-size: 33px;
  line-height: 10px;
  padding: 0;
  display: inline-flex;
  align-items: flex-start;
  transform: rotate(90deg);
  height: 40px;
  width: 40px;
  cursor: pointer;
  padding-right: 3px;
`;

export const ActionCellContainer = styled.div`
  display: flex;
`;

export const ActionsContainer = styled.div`
  box-shadow:
    ${({ theme }) => `0 0 ${theme.shadow.blur}px ${theme.shadow.spread}px rgba(0, 0, 0, ${theme.shadow.opacity});`}
  background: white;
  position: absolute;
  z-index: 1;
`;

export const Tr = styled.tr`
  ${({ status }) => {
    if (status) {
      return `
        border-right: 4px solid ${getColorFromName(undefined, status)};
        transition: border 0.25s;

        &:hover {
          border-right-width: 8px;
        }
      `;
    }
    return '';
  }};
`;
