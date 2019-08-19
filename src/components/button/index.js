import React from 'react';
import PropTypes  from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  padding: 5px 10px;
  background: #555;
  color: #ccc;
`;

const Button = props => {
  return (
    <ButtonContainer>{props.displayText}</ButtonContainer>
  );
};

Button.propTypes = {
  displayText: PropTypes.string.isRequired,
};

export default Button;