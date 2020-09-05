import React from 'react';
import ActionCell from './actionCell';

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
    callToActions?: [{
      props?: {},
      text?: string,
    }]
  },
};

function TableRow({ rowItem, columns }: Props) {
  return (
    <tr key={rowItem.key}>
      {columns.map((columnItem) => {
        if (columnItem.dataType === 'action') {
          return (
            <ActionCell
              key={`${rowItem.key}-${columnItem.key}`}
              callToActions={rowItem.callToActions}
            />
          );
        }
        return (
          <td key={`${rowItem.key}-${columnItem.key}`}>
            {rowItem[columnItem.key] || '-'}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
