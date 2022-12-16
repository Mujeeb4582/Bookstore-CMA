import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => (
  <header className="flex justify-between p-6 md:px-24 w-full shadow-lg min-h-24 bg-white">
    <nav className="flex gap-10 flex-col md:flex-row">
      <NavLink to="/">
        <h1 className="h-full flex  items-center text-3xl font-bold text-azure mr-2">
          Bookstore CMS
        </h1>
      </NavLink>
      <NavLink to="/">
        <span className="h-full flex items-center text-black-two text-sm">
          BOOKS
        </span>
      </NavLink>
      <NavLink to="/categories">
        <span className="h-full flex items-center text-black-two text-sm opacity-50">
          CATEGORIES
        </span>
      </NavLink>
    </nav>
    <button type="button" aria-label="Save" className="h-11 w-11 text-3xl flex items-center p-2 text-azure rounded-full border-2 border-grey-border"><CgProfile /></button>
  </header>
);
export default Navbar;
