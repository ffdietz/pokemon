export const normalizeDetails = ({ pokemon, species }) => {
  const data = {
    id: pokemon.id,
    name: pokemon.name,
    // namejp: species.names.language.name,
    svg: pokemon.sprites.other.dream_world.front_default,
    // image: ,
  }
  return data

}