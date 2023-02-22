import React from 'react'
import "./main.css"

import { Link, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Learn from './pages/Learn'
import Footer from './components/Footer'


const Main = () => {
  
  return (
    <div>


        <Navbar className='bg-red-300 w-full'/> 
        
         <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
        </Routes>
 {/* 
        <Footer/> */}
    </div>
  )
}

export default Main