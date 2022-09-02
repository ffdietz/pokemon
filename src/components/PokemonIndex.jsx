import React from 'react'
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

const PokemonIndex = ({ pokemons }) => {

  return (
    <Box width='35%' height='100%' borderWidth='1px' borderRadius='lg' overflow='scroll' overflowX='hidden'>
      <input>
      </input>
      {
        pokemons.map((pokemon) => {
          return (
            <div>
              <NavLink to={`/pokemon/${pokemon.name}`}>
                {pokemon.name}
              </NavLink>
            </div>
        )
        })
      }
    </Box>
  )
}

export default PokemonIndex