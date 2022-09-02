import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar';
import Pokemon from './Pokemon';
import PokemonCard from './PokemonCard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Pokemon />}>
          <Route path='pokemon/:name' element={<PokemonCard />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
