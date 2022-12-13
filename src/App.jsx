import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Books/Navbar';
import BooksPage from './Pages/BooksPage';
import CategoryPage from './Pages/CategoryPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoryPage />} />
    </Routes>

  </>
);

export default App;
