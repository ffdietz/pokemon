import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Box, Input, Text } from '@chakra-ui/react'

const PokemonIndex = ({ pokemons }) => {
  const [filter, setFilter] = useState('');
  
  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  return (
    <Box width='35%' height='100%' borderWidth='1px' borderRadius='lg' overflow='scroll' overflowX='hidden'>
      
      <Input placeholder='find you pokemon' size='lg'
        onChange={ handleFilter} />

      <Box>
        { pokemons &&
          pokemons.map((pokemon, key) => {
            return (
              pokemon.name.includes(filter)&&
              <div key={key}>
                <NavLink to={`/pokemon/${pokemon.name}`} >
                  <Text fontSize='2.5rem'>
                    {pokemon.name}
                  </Text>
                </NavLink>
              </div>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default PokemonIndex