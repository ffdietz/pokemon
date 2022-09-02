import React, { useState, useEffect } from 'react'
import { getPokemonsList } from '../api/apiClient';

import { Flex } from '@chakra-ui/react'

import PokemonIndex from './PokemonIndex'
import PokemonCard from './PokemonCard'

const Pokemon = () => {
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
      <Flex width='100vw' height='100vh' overflowX='hidden' alignItems='center' justifyContent='center'>
        <Flex width='90%' height='80%' borderWidth='1px' borderRadius='lg' marginTop='10vh' justifyContent='space-between'>
          <PokemonIndex pokemons={pokemons} />
          <PokemonCard />
        </Flex>
      </Flex>
    </>
  )
}

export default Pokemon