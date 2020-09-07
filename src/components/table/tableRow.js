import React from 'react';
import ActionCell from './actionCell';
import { Text } from '../typography';
import { Padding } from '../spacing';
import { Tr } from './index.style';

type Props = {
  columns: [
    {
      key: string,
      label: string,
      dataType: 'text' | 'action' | 'node',
    }
  ],
  rowItem: {
    key: string,
    status?: 'red' | 'green' | 'yellow',
    callToActions?: [{
      props?: {},
      text?: string,
    }]
  },
};

function TableRow({ rowItem, columns }: Props) {
  return (
    <Tr status={rowItem.status || null}>
      {columns.map((columnItem) => {
        if (columnItem.dataType === 'action') {
          if (rowItem.callToActions && rowItem.callToActions.length > 0) {
            return (
              <ActionCell
                key={`${rowItem.key}-${columnItem.key}`}
                callToActions={rowItem.callToActions}
              />
            );
          }
          return (
            <td key={`${rowItem.key}-${columnItem.key}`}>
              <Padding top={3}>
                <Text size={14}>
                  -
                </Text>
              </Padding>
            </td>
          );
        }
        return (
          <td key={`${rowItem.key}-${columnItem.key}`}>
            <Text size={14}>
              {rowItem[columnItem.key] || '-'}
            </Text>
          </td>
        );
      })}
    </Tr>
  );
}

export default TableRow;
