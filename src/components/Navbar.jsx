import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    console.log("Navbar called")
  return (
    <div className="menu">
    <nav>
        <div><NavLink to="/about">About</NavLink></div>
        <div><NavLink to="/blog">Blog</NavLink></div>
        <div><NavLink to="/home">Home</NavLink></div>
        <div><NavLink to="/home">Home</NavLink></div>
    </nav>
    </div>
  )
}

export default Navbar;