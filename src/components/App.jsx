import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar';
import Pokemon from './Pokemon';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Pokemon />}>
          <Route path='pokemon/:name' element={<PokemonDetails/>}></Route>
        </Route>        
      </Routes>
    </>
  )
}

export default App;
