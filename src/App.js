import React from 'react';
//Router
import { Route, Routes } from 'react-router-dom';
//MUI
import { Box } from '@mui/system';
//style
import './App.css';
//Components
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' }}} m='auto' >
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/exercise/:id' element={ <ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
