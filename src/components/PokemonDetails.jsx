import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  console.log('pokemon :>> ', pokemon);
  return (
    <Box>
      {/* descripcion */}
      <Text>
        {pokemon.description}
      </Text>
      
      {/* types */}
      <Flex >
        { pokemon.types.map((t, key) => {
          return (
            <Box width='100px' padding='0.2rem' borderWidth='1px' borderRadius='3px' textAlign='center' margin='2px'>
              <Text>{t.type.name.toUpperCase()}</Text>
            </Box>
          )})
        }
      </Flex>

      
    </Box>
  )
}

export default PokemonDetails