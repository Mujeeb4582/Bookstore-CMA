import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/Books/BookList';
import Navbar from './components/Books/Navbar';
import Categories from './components/Categories/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>

  </>
);

export default App;
