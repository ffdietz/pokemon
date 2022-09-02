import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'

import { Box, Flex } from '@chakra-ui/react'

import { getPokemonDetails } from '../api/apiClient';
import { normalizeDetails } from '../utils/normalizeDetails';

import PokemonCover from './PokemonCover';
import PokemonDetails from './PokemonDetails';



const PokemonCard = () => {
  const params = useParams();
  const name = params.name;
  const [thisPokemon, setThisPokemon] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const MotionFlex = motion(Flex);

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
    <Box width='60%'
      position='relative'>
      {
        !isLoading &&
        <MotionFlex
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
            <PokemonCover pokemon={thisPokemon} />
            <PokemonDetails pokemon={thisPokemon} />
        </MotionFlex>
      }
    </Box>
  )
}

export default PokemonCard