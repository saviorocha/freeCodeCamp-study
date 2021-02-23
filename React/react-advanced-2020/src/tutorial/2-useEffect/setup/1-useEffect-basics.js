import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
    console.log("call useEffect");
  }, [value]); // toda vez que o item dentro do vetor for atualizado, o useEffect roda; se o vetor estiver vazio ele roda só na renderização inicial

  useEffect(() => {
    console.log("Esse código só roda na inicialização!");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Click me</button>
    </>
  );
};

export default UseEffectBasics;
