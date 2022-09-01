import React, { useState, useEffect} from 'react'
import { Flex } from '@chakra-ui/react'
import PokemonIndex from './PokemonIndex'
import PokemonDetails from './PokemonDetails'

const Pokemon = () => {
  return (
    <>
      <Flex width='100vw' height='100vh' overflow='hidden' alignItems='center' justifyContent='center'>
        <Flex width='80%' height='70%' borderWidth='1px' borderRadius='lg' marginTop='10vh' justifyContent='space-between'>
          <PokemonIndex/>
          <PokemonDetails/>
        </Flex>
      </Flex>
    </>
  )
}

export default Pokemon