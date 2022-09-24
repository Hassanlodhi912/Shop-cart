import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Intro from '../screen/intro/Intro'
const Router = () => {
  return (
        <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Intro/>}/>
        </Routes>
        </BrowserRouter>
      
  )
}

export default Router
