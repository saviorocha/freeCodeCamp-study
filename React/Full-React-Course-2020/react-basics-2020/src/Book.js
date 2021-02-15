import React from 'react'

const Book = (props) => {
    // const { title, imgSrc, author } = props.book;

    const clickHandler = () => {
        alert("Você me clicou!");
    }

    const complexExample = (author) => {
        console.log(author);
    }

    const { title, imgSrc, author } = props;
    return (
        <article onMouseOver={() => console.log(title)} className="book">
            <img src={imgSrc} alt="" />
            <h4 onClick={() => console.log(title)}>{title}</h4>
            <h1>{author}</h1>
            <input type="button" onClick={clickHandler} value="Click me" />
            <input type="button" onClick={() => complexExample(author)} value="Exemplo mais complexo" />
        </article>
    );
}

export default Book
