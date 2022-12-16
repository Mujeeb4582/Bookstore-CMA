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

  const list = () => (bookDetails && bookDetails.map((book) => <Book key={book.id} book={book} />));
  if (!bookDetails.length) {
    return (
      <main className="flex flex-col pb-8 pt-8 px-6 md:px-24 gap-10">
        <section className="book-card flex justify-center items-center bg-dirty-white rounded-sm p-12 shadow-md h-48">
          <div className="text-3xl font-bold">
            Please add books
          </div>
        </section>
      </main>
    );
  }
  return (
    <>
      <ul className="flex flex-col gap-12 items-center w-fit m-auto md:w-full  md:flex-col justify-between py-8">
        {list()}
      </ul>
    </>
  );
};

export default BookList;
