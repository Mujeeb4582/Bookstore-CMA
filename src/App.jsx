import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Books/Navbar';
import BooksPage from './Pages/BooksPage';
import CategoryPage from './Pages/CategoryPage';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
