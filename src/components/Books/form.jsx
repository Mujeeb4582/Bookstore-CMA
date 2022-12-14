import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (bookTitle.trim() !== '' && bookAuthor.trim() !== '') {
      const payload = { id: uuidv4(), bookTitle, bookAuthor };
      dispatch(addBook(payload));
      setTitle('');
      setAuthor('');
    } else {
      setTitle('');
      setAuthor('');
      alert('Please write book and author name.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>

      <form onSubmit={handleForm}>
        <input type="text" name="title" value={bookTitle} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" />
        <input type="text" name="author" value={bookAuthor} onChange={(e) => setAuthor(e.target.value)} placeholder="Book Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
