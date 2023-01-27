import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

// Components
import Home from './components/Home';
import BookList from './components/BookList';
import BookReview from './components/BookReview';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={Home} />
      <Route exact path="/booklist" element={BookList} />
      <Route exact path="/bookreview/:bookId" element={BookReview} />
    </Routes>
  </Router>,
 
);