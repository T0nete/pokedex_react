export async function getPokemon () {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const json = await response.json()

  const data = json.results.map(pokemon => ({
    name: pokemon.name,
    data: pokemon.url
  }))

  return data
}

export async function getPokemonData (pokemonList) {
  console.log('getPokemonData ' + pokemonList)
  if (!pokemonList) return

  const pokemonData = pokemonList.map(pokemon => (
    fetchPokemonData(pokemon.url)
  ))

  //   console.log(pokemonData)
  return pokemonData
}

async function fetchPokemonData (url) {
  const response = await fetch(url)
  const json = await response.json()

  const pokemonData = json.map(pokemon => ({
    name: pokemon.name,
    img: pokemon.sprites.front_default,
    types: pokemon.types.map(type => (type.type))
  }))

  return pokemonData
}
