
import React from 'react';
import Modal from 'react-modal';
import GlobalStyle from '../globalStyle';
import { StyledIcon, StyledWrapper, customModalStyles } from './index.style';
import Icon from '../icon';
import theme from './theme';

type Props = {
  children: * => Node,
  isOpen: boolean,
  hasCloseButton?: boolean,
  disabledClose?: boolean,
  onRequestClose?: () => void,
  onAfterOpen?: () => void,
  modalWidth?: string,
}

// bind modal to the body of the app
Modal.setAppElement('body');

function JupiterModal(props: Props) {
  const {
    isOpen, onRequestClose, onAfterOpen, children, hasCloseButton, disabledClose, modalWidth,
  } = props;

  function closeModal() {
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={!disabledClose}
      style={
        customModalStyles(theme.borderRadius, theme.overlayColor, modalWidth, theme.modalShadow)
      }
    >
      <GlobalStyle />
      <StyledWrapper>
        {(!disabledClose && hasCloseButton) && (
          <StyledIcon onClick={closeModal} aria-hidden="true">
            <Icon name="close" size="lg" />
          </StyledIcon>
        )}
        {children}
      </StyledWrapper>
    </Modal>
  );
}

JupiterModal.defaultProps = {
  onRequestClose: () => {},
  onAfterOpen: () => {},
  hasCloseButton: true,
  disabledClose: false,
  modalWidth: '80%',
};

export default JupiterModal;
