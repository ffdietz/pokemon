import axios from "axios";

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})


export const getPokemonsList = async () => {
  const {data} = await client.get(`pokemon/?offset=20&limit=5`);
  return data.results
}


export const getPokemonDetails = async (user) => {
  const response = await client.get(`users/${user}`);

  return response.data
}