import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import BookProgress from './bookprograss';

const Book = ({ book }) => {
  const {
    id,
    title,
    author,
    category,
  } = book;
  const dispatch = useDispatch();
  const maxChapter = 48;
  const randomProgress = Math.random();
  const currentChapter = maxChapter * randomProgress;
  const chapter = Math.floor(currentChapter);
  const percent = Math.floor(100 * randomProgress);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="flex flex-col gap-12 items-center bg-white w-fit m-auto md:w-full  md:flex-row justify-between rounded-sm px-7 py-8 shadow-lg">
        <li className="flex flex-col gap-6 justify-between items-start w-72 ">
          <div className="flex flex-col gap-0">
            <span className="font-bold text-sm text-black-two opacity-50">
              {category}
            </span>
            <h3 className="text-xl font-bold font-roboto">
              {title}
            </h3>
            <span className="text-sm font-light text-azure font-roboto">
              {author}
            </span>
          </div>
          <div className="flex gap-2 justify-center items-center text-gray-300">
            <button type="button" className="text-m font-light text-azure font-roboto cursor-pointer">Comments</button>
            <span className="text-black-border px-1">|</span>
            <button type="button" onClick={handleRemove} className="text-m font-light text-azure font-roboto cursor-pointer">Remove</button>
            <span className="text-black-border px-1">|</span>
            <button type="button" className="text-m font-light text-azure font-roboto cursor-pointer">Edit</button>
          </div>
        </li>
        <BookProgress percent={percent} chapter={`Chapter ${chapter}`} />
      </div>
    </>
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
