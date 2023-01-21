import '../styles/App.css';
import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Display from './Display';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';

function App() {
  let [calculate, setCalculate] = useState({
    expression: 0,
    result: 0,
  });

  function evaluate(exp) {
    const ops = "+-/*";

    let num = [];
    let toEvaluate = [];
    for (let i = 0; i < exp.length; i++) {
      if (ops.includes(exp[i])) {
        toEvaluate.push(parseInt(num.join(""), 16));
        toEvaluate.push(exp[i]);
        num.length = 0;
      } else {
        num.push(exp[i]);
      }
    }
    toEvaluate.push(parseInt(num.join(""), 16));
    num.length = 0;
    
    // eslint-disable-next-line
    return eval(toEvaluate.join("")).toString(16).toUpperCase();
  }

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalculate((previousState) => {
      return {
        ...previousState,
        expression: calculate.expression === 0 || (calculate.expression === calculate.result && !"+-/*".includes(value)) 
          ? value 
          : calculate.expression + value,
        result: calculate.result
      }
    })
  };

  const equalsClickHandler = (e) => {
    e.preventDefault();

    setCalculate((previousState) => {
      console.log(previousState);
      return {
        ...previousState,
        result: evaluate(calculate.expression),
        expression: evaluate(calculate.expression),
      }
    });


  };

  const resetClickHandler = (e) => {
    e.preventDefault();

    setCalculate({
      expression: 0,
      result: 0
    })
  };

  return (
    <Wrapper>
      <Display value={calculate.expression ? calculate.expression : calculate.result} />
      <ButtonWrapper>
        <Button value="D" onClick={numClickHandler} />
        <Button value="E" onClick={numClickHandler} />
        <Button value="F" onClick={numClickHandler} />
        <Button value="CLEAR" onClick={resetClickHandler} />

        <Button value="A" onClick={numClickHandler} />
        <Button value="B" onClick={numClickHandler} />
        <Button value="C" onClick={numClickHandler} />
        <Button value="/" onClick={numClickHandler} />

        <Button value="7" onClick={numClickHandler} />
        <Button value="8" onClick={numClickHandler} />
        <Button value="9" onClick={numClickHandler} />
        <Button value="*" onClick={numClickHandler} />

        <Button value="4" onClick={numClickHandler} />
        <Button value="5" onClick={numClickHandler} />
        <Button value="6" onClick={numClickHandler} />
        <Button value="-" onClick={numClickHandler} />

        <Button value="1" onClick={numClickHandler} />
        <Button value="2" onClick={numClickHandler} />
        <Button value="3" onClick={numClickHandler} />
        <Button value="+" onClick={numClickHandler} />

        <Button value="0" onClick={numClickHandler} className="zero"/>
        <Button value="=" onClick={equalsClickHandler} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
