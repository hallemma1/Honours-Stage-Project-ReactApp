import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import NavBar from './Components/Nav/NavBar.jsx'
import Home from './Pages/Home.jsx'
import MapPage from './Pages/MapPage.jsx'
import TriviaPage from './Pages/TriviaPage.jsx'
import BookPage from './Pages/BookPage.jsx';
import ViewPenguinsPage from './Pages/ViewPenguinsPage.jsx';
import { usePenguinData } from './Hooks/usePenguinData';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Map', path: '/Pages/MapPage' },
  { name: 'My Penguins', path: '/Pages/ViewPenguinsPage' },
  
];


function App() {
  const [penguinDetails, setPenguinDetails] = useState("m");
  const [scoreDetails, setScoreDetails] = useState('Original Unknown Score');
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const navigate = useNavigate();

  const { addCollectedPenguin } = usePenguinData();
  const isFirstTime = !sessionStorage.getItem('penguinName');
  console.log(isFirstTime);
  useEffect(() => {
    const storedPenguinName = sessionStorage.getItem('penguinName');
    const storedScore = sessionStorage.getItem('score');

    if (!isFirstTime) {
      // Use stored data if not the first time
      setPenguinDetails(storedPenguinName);
      setScoreDetails(storedScore);
    } else {
      // First visit: Update state, local storage, and send request
      const penguinName = params.get("penguinName") || 'Unknown Penguin';
      const score = params.get('score') || 'Unknown Score';

      setPenguinDetails(penguinName);
      setScoreDetails(score);

      sessionStorage.setItem('penguinName', penguinName);
      sessionStorage.setItem('score', score);
      console.log("storage name and score: ", penguinName, score);

      // Send request to update data
      const response = addCollectedPenguin(penguinName, score);
      console.log(response);
    }
  }, [params]);

  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route
          path="/"
          element={<Home penguinDetails={penguinDetails} scoreDetails={scoreDetails} />}
        />
        <Route path="/Pages/MapPage" element={<MapPage />} />
        <Route path="/Pages/TriviaPage" element={<TriviaPage />} />
        <Route path="/Pages/BookPage" element={<BookPage />} />
        <Route path="/Pages/ViewPenguinsPage" element={<ViewPenguinsPage />} />
      </Routes>
    </>
  );
}

export default App
