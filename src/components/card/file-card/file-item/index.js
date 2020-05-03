import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './index.style';
import FileImgIcon from './FileImgIcon';
import getIconFileName from '../utils';
import theme from '../theme';

type Props = {
  type?: 'doc' | 'zip',
}

const FileItem = (props: Props) => {
  const [isActive, setActivateValue] = useState(false);
  const { type } = props;

  function startHover() {
    setActivateValue(true);
  }

  function endHover() {
    setActivateValue(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        data-test="file-item"
        isActive={isActive}
        onMouseEnter={startHover}
        onMouseLeave={endHover}
      >
        <FileImgIcon
          iconFileName={getIconFileName(type, !isActive)}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

FileItem.defaultProps = {
  type: 'zip',
};

export default FileItem;
