import React from 'react'
import { Flex, Text, Box } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box>
      <Flex
        height='10vh'
        width='100vw'
        position='fixed'
        background='#FFF'
        color='#000'
        alignItems='center'
        padding='2rem'
        borderWidth='2px'
      >
        <Text fontSize='2rem' margin='0'>
          PokemonPokeDex
        </Text>
      </Flex>
    </Box>
  )
}

export default Navbar