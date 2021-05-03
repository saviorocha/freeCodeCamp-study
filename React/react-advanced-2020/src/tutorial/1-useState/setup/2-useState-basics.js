import React, { useState } from 'react';

// useState - função do React que retorna um Array de dois elementos
// o primeiro elemento é um valor e o segundo uma função que controla esse valor 

const UseStateBasics = () => {
  const [title, setTitle] = useState("Ficar com certeza");
  const onClickHandler = () => {
    if (title === "Ficar com certeza") {
      setTitle("Maluco beleza");
    } else {
      setTitle("Ficar com certeza");
    }
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <input type="button" className="btn" onClick={onClickHandler} value="Mudar título" />
    </React.Fragment>
  );
};

export default UseStateBasics;
