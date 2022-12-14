import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const bookTitle = e.target.elements.title.value;
    const bookAuthor = e.target.elements.author.value;
    const payload = { id: uuidv4(), bookTitle, bookAuthor };
    dispatch(addBook(payload));
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>

      <form onSubmit={handleForm}>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Book Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
