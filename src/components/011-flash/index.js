import React, { useState, useLayoutEffect } from "react";
import { Container } from "./style";

const Flash = ({ message, timer = 5000 }) => {
  const [display, setDisplay] = useState(true);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay(false);
    }, timer);

    return function cleanUp() {
      clearTimeout(timeout);
    };
  });

  return <>{display ? <Container timer={timer}>{message}</Container> : null}</>;
};

export default Flash;
