import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GlobalStyle from '../globalStyle';

const ButtonContainer = styled.button`
  padding: 5px 10px;
  background: #555;
  color: #ccc;
  font-family: "IRANSans";
`;

const Button = ({ displayText }) => (
  <>
    <GlobalStyle />
    <ButtonContainer>{displayText}</ButtonContainer>
  </>
);

Button.propTypes = {
  displayText: PropTypes.string.isRequired,
};

export default Button;
