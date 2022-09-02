import getDetails from "./getStats";


export const normalizeDetails = ({ pokemon, species }) => {
  console.log('pokemon', pokemon);
  console.log('species', species);

  const data = {
    id:     pokemon.id,
    name:   pokemon.name,
    svg:    pokemon.sprites.other.dream_world.front_default,
    image:  pokemon.sprites.other["official-artwork"].front_default,
    types:  pokemon.types,
    namejp: species.names.find((name) => name.language.name === 'ja-Hrkt').name,
    description: species.flavor_text_entries.find(lng => lng.language.name === 'en').flavor_text,
    details: getDetails({species, pokemon}),
  }
  return data

}
