import React from 'react';
import { Container } from './style';

const Calc = () => (
  <Container>
    <div className="display">0</div>
    <button className="button-c button-modifier">C</button>
    <button className="button-change button-modifier">+/-</button>
    <button className="button-percent button-modifier">%</button>
    <button className="button-7 button-number">7</button>
    <button className="button-8 button-number">8</button>
    <button className="button-9 button-number">9</button>
    <button className="button-6 button-number">6</button>
    <button className="button-5 button-number">5</button>
    <button className="button-4 button-number">4</button>
    <button className="button-3 button-number">3</button>
    <button className="button-2 button-number">2</button>
    <button className="button-1 button-number">1</button>
    <button className="button-0 button-number">0</button>
    <button className="button-decimal">.</button>
    <button className="button-backspace">{`<`}</button>
    <button className="button-divide button-operation">/</button>
    <button className="button-multiply button-operation">x</button>
    <button className="button-subtract button-operation">-</button>
    <button className="button-sum button-operation">+</button>
    <button className="button-result">=</button>
  </Container>
);

export default Calc;
