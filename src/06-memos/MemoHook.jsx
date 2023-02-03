import React, { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks";


const heavyStuff = ( iterationNumber = 100 ) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log(iterationNumber)
    
  }
  return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

  const { counter, increment } = useCounter(300);
  const [show, setShow] = useState(true)

const memorizadValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizadValue}</h4>

      <button onClick={() => increment()}>+1</button>
      <button onClick={ ()=> setShow(!show)} >Show/Hide { JSON.stringify(!show)}</button>
    </>
  );
};
