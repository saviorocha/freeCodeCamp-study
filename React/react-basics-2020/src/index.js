import React from 'react';
import ReactDom from 'react-dom';

import { books } from './books.js';
import Book from './Book.js';

import './index.css';


function BookList() {
  return (
    <section className="booklist">
      {
        books.map((book) => {
          // return <Book key={book.id} book={book} />
          return <Book key={book.id} {...book} />
        })
      }
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById('root'));
