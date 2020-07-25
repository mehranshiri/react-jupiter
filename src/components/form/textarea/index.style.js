import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  resize: ${({ resize }) => resize};
  min-height: ${({ minHeight }) => `${minHeight}px`};
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
`;

export default StyledTextarea;
