import React from 'react';
import green from '../../../public/images/005/green.png';
import blue from '../../../public/images/005/blue.png';
import gray from '../../../public/images/005/gray.png';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .logos {
    display: flex;
    flex: 1;
    justify-content: space-evenly;

    img {
      margin: 10px;
      width: 64px;
      height: 64px;
    }
  }
`;

const Logo = () => (
  <Container>
    <h1>Logos for FaceSearch</h1>
    <div className="logos">
      <img
        src={green}
        alt="Logo with green tint"
        title="Logo with green tint"
      />
      <img src={blue} alt="Logo with blue tint" title="Logo with blue tint" />
      <img src={gray} alt="Logo with gray tint" title="Logo with gray tint" />
    </div>
  </Container>
);

export default Logo;
