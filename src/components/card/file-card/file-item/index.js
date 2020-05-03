import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import getIconFileName from '../utils';
import { Text } from '../../../typography';
import theme from '../theme';
import FileImgIcon from './fileImgIcon';
import {
  Wrapper, InfoWrapper, VerticalDivider,
} from './index.style';

type Props = {
  type?: 'zip' | 'doc' | 'rar' | 'pdf' | 'jpg' | 'png' | 'mp3' | 'mp4' | 'pptx' | 'xlsx',
  title?: string,
  description?: string,
  price: string,
  fileSize?: string,
  onClick?: () => void,
}

const FileItem = (props: Props) => {
  const [isActive, setActivateValue] = useState(false);
  const {
    type,
    title,
    description,
    price,
    fileSize,
    onClick,
  } = props;

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
        onClick={onClick}
      >
        <FileImgIcon
          iconFileName={getIconFileName(type, !isActive)}
        />

        <InfoWrapper>
          <Text
            size={14}
            bold
            data-test="file-item-title"
          >
            { title }
          </Text>

          {description ? (
            <Text
              size={10}
              data-test="file-item-desc"
              bold
            >
              { description }
            </Text>
          ) : (
            <br />
          )}

          <div>
            {fileSize && (
              <>
                <Text
                  size={10}
                  data-test="file-item-size"
                >
                  { fileSize }
                </Text>
                <VerticalDivider />
              </>
            )}

            <Text
              size={10}
              data-test="file-item-price"
            >
              {price}
            </Text>
          </div>

        </InfoWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

FileItem.defaultProps = {
  type: 'zip',
  title: 'فایل دانلودی',
  description: '',
  fileSize: '',
  onClick: () => null,
};

export default FileItem;
