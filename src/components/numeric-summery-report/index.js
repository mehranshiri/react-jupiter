// @flow

import React from 'react';
import GlobalStyle from '../globalStyle';
import { Text } from '../typography';
import { toPersianNumber } from '../utils/numbers';
import { ListContainer, ListItem } from './index.style';

type Props = {
  data: [],
  textColor?: string,
}

const NumericSummeryReport = (props: Props) => {
  const { data, textColor } = props;
  return (
    <>
      <GlobalStyle />
      <ListContainer data-test="numeric-summery-report">
        {data.map((report) => (
          <ListItem key={report.id}>
            <Text size="12" color={textColor}>{report.title}</Text>
            <Text size="16" bold>{toPersianNumber(report.count, {})}</Text>
          </ListItem>
        ))}
      </ListContainer>
    </>
  );
};

NumericSummeryReport.defaultProps = {
  textColor: 'gray',
};

export default NumericSummeryReport;
