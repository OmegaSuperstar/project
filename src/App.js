import logo from './logo.svg';
import './App.css';
import lolLogo from './lolLogo.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollingImageBar from './ScrollingImageBar';
import ChampionLibrary from './ChampionLibrary';
import Navbar from './Navbar';
import Home from './Home'
import Champions from './Champions';
import ChampionDetails from './ChampionDetails';
import Docs from './Docs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/> {/* route to the home page*/}
          <Route path='/champions' element={<Champions/>}/> {/* route to the champions search page*/}
          <Route path='/champion/:id' element={<ChampionDetails />} /> {/* route to the champion details page*/}
          <Route path='/docs' element={<Docs/>}/> {/* route to the docs page*/}
        </Routes>
      </BrowserRouter>        
    </div>
  );
}

export default App;