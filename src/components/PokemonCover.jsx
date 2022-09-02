import React from 'react'
import { Flex, Heading, Image, Box } from '@chakra-ui/react'

const PokemonCover = ({ pokemon }) => {
  
  return (
    <>
      <Box position='absolute' right='-10%'>
        <Image boxSize='600px' src={pokemon.image} alt='pokeImage' />
      </Box>
      {/* <Image boxSize='200px' src={pokemon.svg} alt='pokeImage' /> */}
    </>

  )
}

export default PokemonCover