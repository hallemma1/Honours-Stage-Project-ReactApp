import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';
import NavBar from './Components/Nav/NavBar.jsx'
import Home from './Pages/Home.jsx'
import MapPage from './Pages/MapPage.jsx'
import TriviaPage from './Pages/TriviaPage.jsx'
import BookPage from './Pages/BookPage.jsx';
import ViewPenguinsPage from './Pages/ViewPenguinsPage.jsx';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#0661F4'
//     },
//     secondary: {
//       main: '#FC9F22'
//     }
    
//   },
//   typography:{
//     fontFamily: 'Rubik'
//   }
// })

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Map', path: '/Pages/MapPage' },
  { name: 'Trivia', path: '/Pages/TriviaPage' },
  { name: 'Book', path: '/Pages/BookPage' },
  { name: 'My Penguins', path: '/Pages/ViewPenguinsPage' },
];

function App() {
  // const [penguinDetails, setPenguinDetails] = useState('Unknown Penguin');
  // const [scoreDetails, setScoreDetails] = useState('Unknown Score');
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // const navigate = useNavigate();


  // useEffect(() => {
  //   const penguinName = params.get('penguinName') || 'Unknown Penguin';
  //   setPenguinDetails(penguinName);

  //   const score = params.get('score') || 'Unknown Score';
  //   setScoreDetails(score);

  //   navigate(`/penguinName=${penguinName}&score=${score}`);
  // }, [params]);


  return (
    <Router>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages/MapPage" element={<MapPage />} />
        <Route path="/Pages/TriviaPage" element={<TriviaPage />} />
        <Route path="/Pages/BookPage" element={<BookPage />} />
        <Route path="/Pages/ViewPenguinsPage" element={<ViewPenguinsPage />} />
      </Routes>
    </Router>
  )
}

export default App
