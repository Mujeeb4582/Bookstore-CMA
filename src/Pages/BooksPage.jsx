import React from 'react';
import BookList from '../components/Books/BookList';
import Form from '../components/Books/form';

const BooksPage = () => (
  <>
    <div className="flex flex-col pb-64 pt-12 px-6 md:px-24 gap-4">
      <BookList />
      <Form />
    </div>
  </>
);

export default BooksPage;
