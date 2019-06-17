import React from 'react';
import { Container } from './style';

const Flash = ({ appearance, children }) => {
  return <Container appearance={appearance}>{children}</Container>;
};

export default Flash;
