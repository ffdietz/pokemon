import { Box, Text, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  console.log('pokemon :>> ', pokemon);
  return (
    <Flex borderWidth='1px' borderRadius='lg' overflow='scroll' height='100%' overflowX='hidden'>     
      
      <Box>
        <Flex flexDir='column'>
            <Heading as='h2' size='4xl'>
              {pokemon.name.toUpperCase()}
            </Heading>

            <Heading as='h2' size='2xl'>
              {pokemon.namejp}
            </Heading>

            <Heading as='h2' size='3xl'>
            {("00"+pokemon.id).slice(-3)}
            </Heading>
          </Flex>
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

        {/* descripcion */}
        <Text width='40%'>
          {pokemon.description}
        </Text>
      </Box>

    </Flex>
  )
}

export default PokemonDetails