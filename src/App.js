import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import AddQuote from './components/AddQuote';
import QuotesList from './components/QuotesList';

const App = () => {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href="/" className='navbar-brand'>
          Quotes Management MERN App
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/add"} className="nav-link">
              Add Quote
            </Link>
          </li>
        </div>
      </nav>
      <div className='container mt-3'>
        <Routes>
          <Route path="/" element={<QuotesList />} />
          <Route path="/quotes" element={<QuotesList />} />
          <Route path="/add" element={<AddQuote />} />
        </Routes>
      </div>
    </div>
  )
}

export default App