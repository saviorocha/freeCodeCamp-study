import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Sávio",
    age: 20,
    message: "Mensagem aleatória"
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Outra mensagem" });
  }
  console.log(person);
  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.message}</h1>
      <button className="btn" onClick={changeMessage}>Mudar mensagem</button>
    </>
  );
};

export default UseStateObject;
