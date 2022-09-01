import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Heading, Image } from '@chakra-ui/react'
import { useState } from 'react';
import { getPokemonDetails } from '../api/apiClient';
import { normalizeDetails } from '../utils/normalizeDetails';

const PokemonDetails = () => {
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
        console.log('details', details)
        setThisPokemon(pokemon);
        setLoading(false);
      })
      // .then( console.log('pokemon', thisPokemon))
      .catch(error => console.error(error));
    
  }, [name, isLoading])

  console.log('thisPokemon', thisPokemon)

  return (
    <Box width='45%' borderWidth='1px' borderRadius='lg'>
      {
        !isLoading &&
        <>
          <Heading as='h2' size='3xl'>
              {thisPokemon.name.toUpperCase()}
          </Heading>
          <Heading as='h2' size='3xl'>
              {thisPokemon.id}
          </Heading>
          <Image boxSize='200px' src={thisPokemon.svg} alt='pokeImage'/>
        </>
      }
    </Box>
  )
}

export default PokemonDetails