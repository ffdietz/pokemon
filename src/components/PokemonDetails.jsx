import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
import { useState } from 'react';
import { getPokemonDetails } from '../api/apiClient';

const PokemonDetails = () => {
  const params = useParams();
  const name = params.name;
  const [thisPokemon, setThisPokemon] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonDetails(name)
      .then(details => {
        setThisPokemon(details);
        setLoading(false);
      })
      .then( console.log('pokemon', thisPokemon))
      .catch(error => console.error(error));
  }, [name, isLoading])

  return (
    <Box width='45%' borderWidth='1px' borderRadius='lg'>
      <h1>{params.name.toUpperCase()}</h1>
      
    </Box>
  )
}

export default PokemonDetails