import React from 'react';
import { Container } from './style';

const Calc = () => (
  <Container>
    <div className="display">0</div>
    <button className="button-c">C</button>
    <button className="button-change">+/-</button>
    <button className="button-percent">%</button>
    <button className="button-7">7</button>
    <button className="button-8">8</button>
    <button className="button-9">9</button>
    <button className="button-6">4</button>
    <button className="button-5">5</button>
    <button className="button-4">6</button>
    <button className="button-1">1</button>
    <button className="button-2">2</button>
    <button className="button-3">3</button>
    <button className="button-0">0</button>
    <button className="button-divide">/</button>
    <button className="button-multiply">x</button>
    <button className="button-subtract">-</button>
    <button className="button-sum">+</button>
    <button className="button-result">=</button>
    <button className="button-decimal">.</button>
    <button className="button-backspace">{`<`}</button>
  </Container>
);

export default Calc;
