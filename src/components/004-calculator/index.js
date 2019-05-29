import React from 'react';
import {
  FaTimes,
  FaDivide,
  FaMinus,
  FaPlus,
  FaEquals,
  FaBackspace,
  FaPercentage,
} from 'react-icons/fa';
import { Container } from './style';

const Calc = () => (
  <Container>
    <div className="display">0.</div>
    <button className="button-c button-modifier">
      <span aria-hidden>C</span>
      <span className="label">Clear</span>
    </button>
    <button className="button-change button-modifier">
      <span aria-hidden>+/-</span>
      <span className="label">Invert sign</span>
    </button>
    <button className="button-percent button-modifier">
      <span className="label">Percentage</span>
      <FaPercentage aria-hidden />
    </button>
    <button className="button-0 button-number">0</button>
    <button className="button-1 button-number">1</button>
    <button className="button-2 button-number">2</button>
    <button className="button-3 button-number">3</button>
    <button className="button-4 button-number">4</button>
    <button className="button-5 button-number">5</button>
    <button className="button-6 button-number">6</button>
    <button className="button-7 button-number">7</button>
    <button className="button-8 button-number">8</button>
    <button className="button-9 button-number">9</button>
    <button className="button-decimal">
      <span className="label">Decimal separator</span>
      <span aria-hidden>.</span>
    </button>
    <button className="button-backspace">
      <span className="label">Backspace</span>
      <FaBackspace aria-hidden />
    </button>
    <button className="button-divide button-operation">
      <span className="label">Divide</span>
      <FaDivide aria-hidden />
    </button>
    <button className="button-multiply button-operation">
      <span className="label">Multiply</span>
      <FaTimes />
    </button>
    <button className="button-subtract button-operation">
      <span className="label">Subtract</span>
      <FaMinus />
    </button>
    <button className="button-sum button-operation">
      <span className="label">Add</span>
      <FaPlus />
    </button>
    <button className="button-result">
      <span className="label">Equal</span>
      <FaEquals />
    </button>
  </Container>
);

export default Calc;
