import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/categories/categories';

const CategoryPage = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handlebtn = (e) => {
    e.preventDefault();
    dispatch(statusChecker());
  };

  return (
    <>
      <main className="h-[80vh] w-full flex flex-col gap-3   justify-center items-center">
        <h2 className=" bg-inherit w-fit text-center text-3xl text-red-600">{status}</h2>
        <button
          type="button"
          className="text-dirty-white bg-azure my-4 rounded w-fit font-light font-roboto px-12 py-3 text-base font-bold"
          onClick={handlebtn}
        >
          Check status
        </button>

      </main>
    </>
  );
};

export default CategoryPage;
