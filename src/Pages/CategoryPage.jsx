import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/categories/categories';

const CategoryPage = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{status}</h2>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(statusChecker());
        }}
      >
        Check status

      </button>
    </>
  );
};

export default CategoryPage;
