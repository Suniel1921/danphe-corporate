import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';

const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
  </Router>

  </>
  )
}

export default App
