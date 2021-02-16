import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const resetValue = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  }

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Contador normal</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => { setValue(value - 1) }}>Diminuir</button>
        <button className="btn" onClick={resetValue}>Resetar</button>
        <button className="btn" onClick={() => { setValue(value + 1) }}>Aumentar</button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Contador complexo</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>Aumentar com atraso</button>
      </section>
    </>
  );
};

export default UseStateCounter;
