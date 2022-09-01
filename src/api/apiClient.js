import axios from "axios";

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

const LIMIT = 151;

export const getPokemonsList = async () => {
  const { data } = await client.get(`pokemon/?offset=0&limit=${LIMIT}`);
  return data.results
}


export const getPokemonDetails = async (pokemon) => {

  const pokemonData = await client
    .get(`pokemon/${pokemon}`);
  
  const pokemonSpeciesData = await client
    .get(`pokemon-species/${pokemon}`);

  return {
    pokemonData,
    pokemonSpeciesData,
  }
}