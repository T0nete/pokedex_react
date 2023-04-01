const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/'

export async function getPokemon(id) {
  const res = fetch(`${POKEMON_API}${id}`)
  const json = await (await res).json()

  return {
    id: json.id,
    name: json.name,
    types: json.types.map(type => type.type.name),
    img: json.sprites.other['official-artwork'].front_default
  }
}

export async function getPokemonByName(name) {
  const res = await fetch(`${POKEMON_API}${name}`)
  const json = await res.json()

  const data = {
    id: json.order,
    name: json.name,
    types: json.types.map(type => type.type.name),
    img: json.sprites.other['official-artwork'].front_default,
    stats: json.stats.map(stat => ({
      name: stat.stat.name,
      base_stat: stat.base_stat
    }))
  }
  return data
}
