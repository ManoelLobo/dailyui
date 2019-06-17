import React, { useState, useEffect } from 'react';
import { Container } from './style';

const Flash = ({ message, appearance }) => {
  const [display, setDisplay] = useState(true);

  return <Container appearance={appearance}>{message}</Container>;
};

export default Flash;
