import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookDetails = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {bookDetails.map((book) => <Book key={book.id} book={book} />)}
      </ul>
    </>
  );
};

export default BookList;
