import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <button type="button" aria-label="Save" className="profile-icon"><CgProfile /></button>
      </nav>
    </header>
  );
};

export default Navbar;
