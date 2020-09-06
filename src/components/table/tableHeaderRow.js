import React from 'react';
import { Text } from '../typography';

type Props = {
  columns: [
    {
      key: string,
      label: string,
      dataType: 'text' | 'action' | 'node',
    }
  ],
};

function TableHeaderRow({ columns }: Props) {
  return (
    <tr>
      {columns.map((headerItem) => (
        <th key={headerItem.key}>
          <Text size={16} bold>
            {headerItem.label}
          </Text>
        </th>
      ))}
    </tr>
  );
}

export default TableHeaderRow;
