import React from 'react';
import ReactDom from 'react-dom';

/** -- Geral --
 * Para se ter um componente (stateless functional component) react é necessário:
 * - Importar o React
 * - Criar um função com inicial maiúscula (essencialmente, essa função é o componente)
 * - Retornar um HTML (JSX) dentro dessa função 
 *   - só pode retornar exatamente UM elemento, ou um elemento com um número de filhos
 * - Importar o ReactDom e renderizar o componente (Apenas uma vez nos pontos de entrada)
 */

/** -- JSX --
 * Apenas um elemento JSX deve ser retornado
 * Usar camelCase para os atributos HTML
 * className ao invés de class
 * Todas as tags precisam ser fechadas (mesmo os que não fechariam em HTML, como imgs)
 */
// function Greeting() { // nome da função precisa começar com maiúsculo
//   return (
//     <div>
//       <h4>Sou Sávio e esse é meu primeiro componente react</h4>
//     </div>
//   ) // função precisa retornar um "html"
//   // tecnicamente esse retorno é um JSX e não um HTML
// }

// const Greeting = () => {
//   // outra forma de retornar dentro da função
//   // precisa passar (a tag, objeto props, os children)
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// };


/** -- Nested Components --
 * 
 */
function Greeting() { // nome da função precisa começar com maiúsculo
    return (
        <div>
            <Person componente="react" />
            <Person nome="Sávio" />
            <Message />
        </div>
    ) // função precisa retornar um "html"
    // tecnicamente esse retorno é um JSX e não um HTML
}

const Person = (props) => {
    return (
        <h4>Sou {props.nome} e esse é meu primeiro componente {props.componente}</h4>
    );
}

// é possível passar valores de variáveis javascript nas tags
// as variáveis podem ser declaradas dentro ou fora da função
// precisa ser um valor que retorna algo
//      por exemplo, <p>{let a = "mensagem"}</p> não funciona pois é uma declaração
const Message = _ => {
    const msg = "Esta é a minha mensagem"
    return <p>{msg.toUpperCase()}</p>
}

// também é possível aplicar o estilo diretamento no JSX 
// para isso precisa-se usar o double mustache {{}}
// as primeiras chaves indicam que o texto dentro será tratado como JS e as chaves dentro indicam um objeto
// aplicar os estilos desse jeito os transformam em inline, o que pode não ser desejado, mas vai da preferencia de cada um
const Title = () => <h1 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>1984 (Signet Classics)</h1>

// injeta o javascript no index.html
ReactDom.render(<Greeting />, document.getElementById('root')); // ReactDom.render(o que vai ser renderizado, onde vai ser renderizado)
// precisa de fechar a tag para funcionar
// tanto <Greeting/> quanto <Greeting><Greeting/> funcionam