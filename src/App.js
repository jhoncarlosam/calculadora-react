import "./App.css";
import Button from './components/Button';
import Pantalla from './components/Pantalla';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './components/Logo';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  }

  return (
    <div className="App">
      <Logo />
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Button handleClic={addInput}>1</Button>
          <Button handleClic={addInput}>2</Button>
          <Button handleClic={addInput}>3</Button>
          <Button handleClic={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button handleClic={addInput}>4</Button>
          <Button handleClic={addInput}>5</Button>
          <Button handleClic={addInput}>6</Button>
          <Button handleClic={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button handleClic={addInput}>7</Button>
          <Button handleClic={addInput}>8</Button>
          <Button handleClic={addInput}>9</Button>
          <Button handleClic={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button handleClic={calculateResult}>=</Button>
          <Button handleClic={addInput}>0</Button>
          <Button handleClic={addInput}>.</Button>
          <Button handleClic={addInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear handleClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
