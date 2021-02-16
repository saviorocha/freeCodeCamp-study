import React from 'react';

const ErrorExample = () => {
  let title = "Título aleatório";
  const onClickHandler = () => {
    title = "Título mudado!";
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <input type="button" className="btn" onClick={onClickHandler} value="Mudar título" />
    </React.Fragment>
  );
};

export default ErrorExample;
