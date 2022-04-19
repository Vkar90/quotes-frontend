import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import QuotesTable from './components/QuotesTable';
import Quote from './components/Quote';
import AddQuote from './components/AddQuote';
import EditQuote from './components/EditQuote';
import DeleteQuote from './components/DeleteQuote';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path ="/" element={<QuotesTable />} />
          <Route exact path="/add-quote" element={<AddQuote />} />
          <Route exact path="/api/quotes/:id" element={<Quote />} />
          <Route exact path="/api/quotes/:id/edit" element={<EditQuote />} />
          <Route exact path="/api/quotes/:id/delete" element={<DeleteQuote />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
