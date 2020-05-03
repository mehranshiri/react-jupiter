import React from 'react';
import { StyledImgIcon } from './index.style';

type Props = {
  iconFileName: string,
}

const FileImgIcon = (props: Props) => {
  const { iconFileName } = props;

  return (
    <StyledImgIcon
      className={iconFileName}
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
  );
};

export default FileImgIcon;
