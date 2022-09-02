import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Box, Input, Flex, Link } from '@chakra-ui/react'

const PokemonIndex = ({ pokemons }) => {
  const [filter, setFilter] = useState('');
  
  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  return (
    <Box width='35%' height='100%' borderWidth='1px' borderRadius='lg' overflow='scroll' overflowX='hidden'>
      
      <Input onChange={handleFilter} placeholder='search...' width='30%' height='4rem' fontSize='1.5rem' color='black'
        position='fixed' background='yellow.100' margin='0'/>
      <Box marginTop='5rem'>
        { pokemons &&
          pokemons.map((pokemon, key) => {
            return (
              pokemon.name.includes(filter)&&
              <Flex key={key} border='1px' borderRadius='5' color='grey' padding='0.7rem'>
                  <Link as={NavLink} to={`/pokemon/${pokemon.name}`} _activeLink={{ color: 'red' }}
                    fontSize='2.5rem' _hover={{ color: "teal.500" }} 
                  >
                    {pokemon.name}
                  {/* </Text> */}
                </Link>
              </Flex>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default PokemonIndex