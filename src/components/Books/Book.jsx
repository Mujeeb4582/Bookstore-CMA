import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const {
    id,
    title,
    author,
    category,
  } = book;
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <li className="bookInfo">
      <div className="book-content">
        <h2 className="title">{category}</h2>
        <h2 className="title">{title}</h2>
        <h2 className="author">{author}</h2>
        <button type="button">Comments</button>
        <button type="button" onClick={handleRemove}>Remove</button>
        <button type="button">Edit</button>
      </div>
      <div className="progress-stat">
        <div className="progress-icon" />
        <h1 className="percentage">50%</h1>
        <h5 className="completed">completed</h5>
      </div>
      <div className="divider" />
      <div className="chapter">
        <h5>CURRENT CHAPTER</h5>
        <h4>Chapter 10</h4>
      </div>
      <div>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
