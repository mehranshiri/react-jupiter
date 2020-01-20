import styled from 'styled-components';
import { Heading } from '../typography';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
`;

export const Title = styled(Heading)`
  margin: 8px 8px 8px 0;
  height: 45px;
  overflow: hidden;
  position: relative;
`;
