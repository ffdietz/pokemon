import React from 'react'
import { Flex, Heading, Image } from '@chakra-ui/react'

const PokemonCover = ({ pokemon }) => {
  
  return (
    <>
      <Flex >
        <Flex flexDir='column'>
          <Heading as='h2' size='4xl'>
            {pokemon.name.toUpperCase()}
          </Heading>

          <Heading as='h2' size='2xl'>
            {pokemon.namejp}
          </Heading>

          <Heading as='h2' size='3xl'>
            {pokemon.id}
          </Heading>      
        </Flex>
        
        <Image boxSize='600px' src={pokemon.image} alt='pokeImage' />

      </Flex>

      
      
      {/* <Image boxSize='200px' src={pokemon.svg} alt='pokeImage' /> */}
    </>

  )
}

export default PokemonCover