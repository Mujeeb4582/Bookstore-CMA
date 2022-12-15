import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <ul>
        {bookDetails && bookDetails.map((book) => <Book key={book.id} book={book} />)}
      </ul>
    </>
  );
};

export default BookList;
