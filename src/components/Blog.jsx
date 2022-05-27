import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Cars from './Cars';

const Blog = () => {
  return (
    <>
    <div className="blog-container">
        <h1>Blog</h1>
        <Link to="dogs">Dogs</Link>
        <Outlet />
        <h1>Hello</h1>
    </div>
    </>
  )
}

export default Blog;