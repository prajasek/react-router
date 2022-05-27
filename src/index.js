import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cars from './components/Cars';
import Recipes from './components/Recipes';
import Dogs from './components/Dogs';


let val = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />        
    </BrowserRouter>
  </React.StrictMode>
);