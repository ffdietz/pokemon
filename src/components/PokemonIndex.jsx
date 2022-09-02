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
      
      <Input onChange={handleFilter} placeholder='search...' size='lg' width='30%' fontSize='1.5rem' color='black'
        position='fixed' background='#FFF'/>
      <Box>
        { pokemons &&
          pokemons.map((pokemon, key) => {
            return (
              pokemon.name.includes(filter)&&
              <div key={key}>
                <NavLink to={`/pokemon/${pokemon.name}`} >
                  <Text fontSize='2.5rem' color='grey' borderWidth='1px' borderRadius='5' padding='0.3em'>
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