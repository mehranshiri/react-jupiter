import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Heading, Text } from '../../../typography';
import FileImgIcon from './fileImgIcon';
import { Wrapper } from './index.style';
import getIconFileName from '../utils';
import theme from '../theme';

type Props = {
  type?: 'doc' | 'zip',
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

  function handleClick() {
    setActivateValue(true);
    onClick();
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        data-test="file-item"
        isActive={isActive}
        onMouseEnter={startHover}
        onMouseLeave={endHover}
        onClick={handleClick}
      >
        <FileImgIcon
          iconFileName={getIconFileName(type, !isActive)}
        />

        <Heading
          level={5}
          size="lg"
          data-test="file-item-title"
        >
          { title }
        </Heading>

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

        {fileSize && (
          <Text
            size={10}
            data-test="file-item-size"
          >
            { fileSize }
          </Text>
        )}

        <Text
          size={10}
          data-test="file-item-price"
        >
          {price}
        </Text>


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
