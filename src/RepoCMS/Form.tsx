import React from 'react';
import styled from '@emotion/styled';
import { IForm } from './types';

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Form: React.FC<IForm> = () => {
  return <Container></Container>;
};

export default Form;
