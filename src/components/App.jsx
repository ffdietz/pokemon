import { useState, useEffect } from 'react'
import { getPokemonsList } from '../api/apiClient';
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
      .catch(error => console.error(error));
  })

  useEffect(() => {
    if(pokemons) {
      getPokemonDetails()
        .then((res) => {
          // setUserRepos(res);
        })
        .catch(error => console.error(error));
    }
  }, [user, userDetails])

  return (
    <>
      <Navbar/>
      <Pokemon/>
    </>
  )
}

export default App;
