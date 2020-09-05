import React from 'react';

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
          {headerItem.label}
        </th>
      ))}
    </tr>
  );
}

export default TableHeaderRow;
