import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
        <div className='container'>
            <ul className='navbar-nav mr-auto'>
                <NavLink className="navbar-brand" to="/">
                    Quote Management App
                </NavLink>
                <li className='nav-item'>
                    <NavLink className='nav-link' activeclassname="active" to="/">All Quotes</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' activeclassname="active" to="/add-quote">Add Quote</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' activeclassname="active" to="/quote-of-the-day">Quote of the Day</NavLink>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar