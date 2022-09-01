import { useState, useEffect } from 'react'
import { getPokemonsList, getPokemonDetails } from '../api/apiClient';
import Navbar from './Navbar';
import Pokemon from './Pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonsList()
      .then(list => {
        setPokemons(list);
        setLoading(false);
      })
      // .then( console.log('pokemons', pokemons))
      .catch(error => console.error(error));
  }, [isLoading])

  return (
    <>
      <Navbar/>
      {isLoading &&
        <Pokemon pokemons={pokemons} />
      }
    </>
  )
}

export default App;
