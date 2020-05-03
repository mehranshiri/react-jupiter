import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledImgIcon, Wrapper } from './index.style';
import theme from '../theme';

type Props = {
  type?: 'doc' | 'zip',
}

function getIconName(type, isLightIcon) {
  return `icon-${type}${isLightIcon ? '-light' : ''}`;
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
        <StyledImgIcon
          className={getIconName(type, !isActive)}
          data-test="file-image"
        >
          <span className="path1" />
          <span className="path2" />
          <span className="path3" />
          <span className="path4" />
          <span className="path5" />
          <span className="path6" />
          <span className="path7" />
          <span className="path8" />
          <span className="path9" />
          <span className="path10" />
          <span className="path11" />
          <span className="path12" />
          <span className="path13" />
        </StyledImgIcon>
      </Wrapper>
    </ThemeProvider>
  );
};

FileItem.defaultProps = {
  type: 'zip',
};

export default FileItem;
