import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => { // -> função opcional de cleanup
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render");
  return (
    <>
      <h1>Tamanho </h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
