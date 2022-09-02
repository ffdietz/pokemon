import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { Box } from '@chakra-ui/react'

import { getPokemonDetails } from '../api/apiClient';
import { normalizeDetails } from '../utils/normalizeDetails';

import PokemonCover from './PokemonCover';
import PokemonDetails from './PokemonDetails';



const PokemonCard = () => {
  const params = useParams();
  const name = params.name;
  const [thisPokemon, setThisPokemon] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonDetails(name)
      .then(details => {
        const { pokemonData, pokemonSpeciesData } = details;
        const pokemon = normalizeDetails({
          pokemon: pokemonData.data,
          species: pokemonSpeciesData.data
        })
        setThisPokemon(pokemon);
        setLoading(false);
      })
      .catch(error => console.error(error));

  }, [name, isLoading])

  // console.log('thisPokemon', thisPokemon);


  return (
    <Box width='60%' borderWidth='1px' borderRadius='lg' overflow='scroll' overflowX='hidden'>
      {
        !isLoading &&
          <>
            {/* <PokemonCover pokemon={thisPokemon} /> */}
            <PokemonDetails pokemon={thisPokemon} />
          </>
      }
    </Box>
  )
}

export default PokemonCard