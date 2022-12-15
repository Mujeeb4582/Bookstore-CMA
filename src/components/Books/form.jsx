import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (title.trim() !== ''
    && author.trim() !== ''
    && category.trim() !== '') {
      const payload = {
        id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(payload));
      resetForm();
    } else {
      resetForm();
      alert('Please write book, author and category name.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>

      <form onSubmit={handleForm}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book Author"
        />
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Book category"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
