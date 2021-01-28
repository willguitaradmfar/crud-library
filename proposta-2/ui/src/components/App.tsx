import React from 'react';
import './App.css';

import Book from '../../../api/Book'

function App() {
  const books: Book[] = Book.findByName("Teste")

  const book: Book = Book.findById(2)

  return (
    <div className="App">
      <h1>{book.name}</h1>

      <ul>
        {books.map((book: Book) => {
          return (<li>{book.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
