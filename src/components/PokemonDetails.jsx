import React from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

const PokemonDetails = () => {
  const params = useParams();

  return (
    <Box width='45%' borderWidth='1px' borderRadius='lg'>
      <p>PokemonDetails</p>
      <p>{params.name}</p>
    </Box>
  )
}

export default PokemonDetails