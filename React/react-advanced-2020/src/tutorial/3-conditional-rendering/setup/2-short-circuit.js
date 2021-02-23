import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState("oie");
  const firstValue = text || 'hello world'; // retorna hello world, pois text é falsy
  const secondValue = text && 'hello world'; // não retorna nada, pois text é falsy

  return (
    <>
      {/* <h1>{text || "retorna isso se não tiver o text"}</h1> */}
      {/* {text && <h1>retorna isso se text for true</h1>} */}
      <button className="btn" onClick={() => setIsError(!isError)}>Alternar erro</button>
      { isError && <h1>Error...</h1>}
      { isError
        ? <div>
          <p>Opa parça, teve um erro</p>
        </div>
        : <p>Tudo suave chefe</p>
      }
    </>
  );
};

export default ShortCircuit;
