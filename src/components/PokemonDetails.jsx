import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  console.log('pokemon :>> ', pokemon);
  return (
    <Box>
      {/* types */}
      <Flex >
        {pokemon.types.map((t, key) => {
          return (
            <Box width='100px' padding='0.2rem' borderWidth='1px' borderRadius='3px' textAlign='center' margin='2px'>
              <Text>{t.type.name.toUpperCase()}</Text>
            </Box>
          )
        })
        }
      </Flex>

      {/* descripcion */}
      <Text width='40%'>
        {pokemon.description}
      </Text>

      {/* details */}
      <Box>
        {pokemon.details.map( (d, key) => {
          return (
            <Box>
              <Text fontSize='1rem'>{d.title.toUpperCase()} : {d.content}</Text>  
            </Box>
          )})
        }
      </Box>
      
    </Box>
  )
}

export default PokemonDetails