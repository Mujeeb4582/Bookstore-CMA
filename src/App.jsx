import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Books/Navbar';
import BooksPage from './Pages/BooksPage';
import CategoryPage from './Pages/CategoryPage';

const App = () => (
  <>
    <Router>
      <main className="w-full h-full font-montserrat bg-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<CategoryPage />} />
        </Routes>
      </main>
    </Router>
  </>
);

export default App;
