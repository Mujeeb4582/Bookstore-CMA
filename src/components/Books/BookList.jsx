import React from 'react';
import Book from './Book';

const BookList = () => {
  const bookDetails = [
    {
      id: 1,
      bookTitle: 'The Forty Rules of Love',
      bookAuthor: 'Elif Shafak',
    },
    {
      id: 2,
      bookTitle: 'The Hunger Games',
      bookAuthor: 'Suzanne Collins',
    },
  ];

  return (
    <>
      <ul>
        {bookDetails.map((book) => <Book key={book.id} book={book} />)}
      </ul>
    </>
  );
};

export default BookList;