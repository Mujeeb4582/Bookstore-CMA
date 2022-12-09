import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <li className="bookInfo">
      <div className="book-content">
        <h2 className="title">{book.bookTitle}</h2>
        <h2 className="author">{book.bookAuthor}</h2>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
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
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
