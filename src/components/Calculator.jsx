import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperation = (operation) => {
    if (input) {
      setInput((prevInput) => prevInput + ' ' + operation + ' ');
    }
  };

  const calculate = () => {
    if (!input) {  
      setResult('');
      setInput('');
      return;
    }
  
    try {
      const evalResult = eval(input); 
      setResult(evalResult);          
      setInput(evalResult.toString());
    } catch (error) {
      setResult('Error'); 
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>

      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => calculate()} className="equal">=</button>
        <button onClick={() => handleClear()} className="clear">C</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;