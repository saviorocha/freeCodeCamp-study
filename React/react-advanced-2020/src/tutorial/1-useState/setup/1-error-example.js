import React from 'react';

const ErrorExample = () => {
  let title = "Título aleatório";
  const onClickHandler = () => {
    /**
     * O erro acontence pois mudamos o valor mas não renderizamos novamente o componente
     * Para isso teremos que usar o useState
     */
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
