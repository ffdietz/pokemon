import { Box, Text, Flex, Heading, Image, TableContainer, Table, Tr, Td, Tbody } from '@chakra-ui/react';
import React from 'react'

const PokemonDetails = ({ pokemon }) => {

  return (
    <Flex borderWidth='1px' borderRadius='lg' overflow='scroll' height='100%' overflowX='hidden'
      paddingTop='10%' paddingBottom='3rem' paddingStart='1rem'
    >     
      
      <Box>
        <Flex flexDir='column'>
            <Heading as='h2' size='4xl'>{pokemon.name.toUpperCase()}</Heading>
            <Heading as='h2' size='2xl'>{pokemon.namejp}</Heading>
            <Heading as='h2' size='3xl'>{("00"+pokemon.id).slice(-3)}</Heading>
        </Flex>
        
        {/* types */}
        <Flex >
          {pokemon.types.map((t, key) => {
            return (
              <Box width='100px' padding='0.2rem' borderWidth='1px' borderRadius='3px' textAlign='center' margin='2px'>
                <Text>{t.type.name.toUpperCase()}</Text>
              </Box>
            )})}
        </Flex>

        {/* details */}
        <Box>
          {pokemon.details.map( (d, key) => {
            return (
              <Box>
                <TableContainer width='50%' height='3rem' marginLeft='0'>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td fontSize='1rem' fontWeight='700' textAlign='left'>{d.title.toUpperCase()}: </Td>
                        <Td textAlign='left'>{d.content}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  </TableContainer>
              </Box>
            )})
          }
        </Box>

        {/* descripcion */}
        <Text width='40%' fontSize='1.5rem' paddingTop='1rem' paddingBottom='3rem'>
          {pokemon.description}
        </Text>
      </Box>

    </Flex>
  )
}

export default PokemonDetails