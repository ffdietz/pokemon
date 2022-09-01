import React from 'react'
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

const PokemonIndex = ({ pokemons }) => {
  // console.log('PokemonIndex', pokemons)

  return (
    <Box width='45%' height='100%' borderWidth='1px' borderRadius='lg' overflow='scroll' overflowX='hidden'>
      <div>
        PokemonIndex
      </div>
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