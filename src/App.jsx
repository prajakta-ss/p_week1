import React from 'react';
import Home from './home/Home';
import {  Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';
import Courses from './courses/Courses';

function App() {
  return (
    <>
    <div className='dark-bg-slate-900 dark:text-white'>
      
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/course" element= {<Courses/>}/>
      

    </Routes>

    </div>
    
    </>
  );
}

export default App;
