const getDetails = ({ species, pokemon }) => {
  const details = [
    {
      title: 'species',
      content: species?.genera.find(lng => lng.language.name === 'en').genus,
    },
    {
      title: 'habitat',
      content: species.habitat.name,
    },
    {
      title: 'height',
      content: pokemon.height.toString().padEnd(1, '.0') + ' m',
    },
    {
    title: 'weight',
    content: (pokemon.weight / 10).toFixed(1) + ' kg',
    },
    {
      title: 'abilities',
      content: pokemon.abilities.map( item => {return item.ability.name}),
    }

  ]
  return details
}

export default getDetails