const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/'

export async function getPokemon(id) {
  const res = fetch(`${POKEMON_API}${id}`)
  const json = await (await res).json()

  return {
    id: json.order,
    name: json.name,
    types: json.types.map(type => type.type.name),
    img: json.sprites.front_default
  }
}
