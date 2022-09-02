import axios from "axios";

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

const FROM = 200;
const LIMIT = 400;

export const getPokemonsList = async () => {
  const { data } = await client.get(`pokemon/?offset=${FROM}&limit=${LIMIT}`);
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