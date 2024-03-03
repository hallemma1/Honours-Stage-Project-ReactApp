import { useState, useEffect } from 'react'
import axios from 'axios';
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
  { name: 'Home', path: '/' },
  { name: 'Map', path: '/Pages/MapPage' },
  { name: 'Trivia', path: '/Pages/TriviaPage' },
  { path: '/Pages/BookPage', name: 'Book' },
];

function App() {
//   useEffect(() => {
//     // Trigger the server-side work when the component mounts using Axios
//     axios.post('http://localhost:5108/api/test')
//         .then(response => console.log(response.data))
//         .catch(error => console.error('Error:', error));
// }, []); // The empty dependency array ensures that this effect runs once when the component mounts


  return (
    <Router>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages/MapPage" element={<MapPage />} />
        <Route path="/Pages/TriviaPage" element={<TriviaPage />} />
        <Route path="/Pages/BookPage" element={<BookPage />} />
      </Routes>
    </Router>
  )
}

export default App
