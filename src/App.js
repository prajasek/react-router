import React from 'react';
import { Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Dogs from './components/Dogs';
import Home from './components/Home';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import ACP from './context/AuthContext';
import './index.css'

console.log("START")

const App = () => {
  console.log("App called")
  return (
    <ACP>
        <Navbar/>
        <Routes>
                <Route path="/home" element={<Home/>} />
                <Route element={<Layout />}>

                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/blog" element={<Blog/>} >
                    <Route path="dogs" element={<Dogs />} />
                    <Route index element={<Recipes />} />
                </Route>
            </Route>
        </Routes>
    </ACP>
  )
}

export default App