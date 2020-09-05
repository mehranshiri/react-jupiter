import React from 'react';
// import { ThemeProvider } from 'styled-components';
import TableHeaderRow from './tableHeaderRow';
import TableRow from './tableRow';
import GlobalStyle from '../globalStyle';

type Props = {
  columns: [
    {
      key: string,
      label: string,
      dataType: 'text' | 'action' | 'node',
    }
  ],
  data: [
    {
      key: string,
    },
  ],
};

function Table(props: Props) {
  const { columns, data } = props;

  return (
    <div>
      <GlobalStyle />
      <table data-test="jupiter-table">
        <thead>
          <TableHeaderRow columns={columns} />
        </thead>
        <tbody>
          {data.map((rowItem) => (
            <TableRow
              key={rowItem.key}
              rowItem={rowItem}
              columns={columns}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
