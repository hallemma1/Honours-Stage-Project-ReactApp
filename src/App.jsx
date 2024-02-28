import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Slider from './Components/Slider/SliderComp.jsx';
import MainContent from './Components/MainContent/MainContent.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';
import NavBar from './Components/Nav/NavBar.jsx'
import Home from './Pages/Home.jsx'
import MapPage from './Pages/MapPage.jsx'
import TriviaPage from './Pages/TriviaPage.jsx'
import BookPage from './Pages/BookPage.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0661F4'
    },
    secondary: {
      main: '#FC9F22'
    }
    
  },
  typography:{
    fontFamily: 'Rubik'
  }
})

const navItems = [
  { name: 'Home', path: '/Pages/Home' },
  { name: 'Map', path: '/Pages/MapPage' },
  { name: 'Trivia', path: '/Pages/TriviaPage' },
  { path: '/Pages/BookPage', name: 'Book' },
];

function App() {

  return (
    <Router>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path="/Pages/Home" element={<Home />} />
        <Route path="/Pages/MapPage" element={<MapPage />} />
        <Route path="/Pages/TriviaPage" element={<TriviaPage />} />
        <Route path="/Pages/BookPage" element={<BookPage />} />
      </Routes>
    </Router>
  )
}

export default App
