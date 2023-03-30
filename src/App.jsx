import { useEffect, useState } from 'react'
import './App.css'
import { usePokemon } from './hooks/pokemon'

function App () {
  // const { pokemonList, pokemonDataList } = usePokemon()
  const [pokemonList, setPokemonList] = useState([])
  const [startEnd, setStartEnd] = useState([1, 20]) // estado global

  async function getPokemon (id) {
    const res = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const json = await (await res).json()

    return {
      id: json.order,
      name: json.name,
      types: json.types.map(type => type.type.name),
      img: json.sprites.front_default
    }
  }

  async function fetchPokemonList () {
    const list = []

    for (let i = 1; i <= 20; i++) {
      list.push(await getPokemon(i))
    }

    console.log(list)

    setPokemonList(list)
  }

  useEffect(() => {
    fetchPokemonList()
  }, [])

  // useEffect(() => {
  //   console.log(startEnd)
  //   const start = startEnd[0]
  //   const end = startEnd[1]

  //   // function fetchPokemonData (pokemon) {
  //   //   return fetch(pokemon.url)
  //   //     .then(res => res.json())
  //   //     .then(data => data.name)
  //   // }

  //   fetch('https://pokeapi.co/api/v2/pokemon/')
  //     .then(res => res.json())
  //     .then(json => {
  //       return json.results.forEach((pokemon) => {
  //         fetchPokemonData(pokemon)
  //       })
  //     })
  //     .then(pokemonList => console.log(pokemonList))
  // }, [])

  // useEffect(() => {
  //   if (!pokemonList) return

  //   async function fetchPokemonData (pokemon) {
  //     const res = await fetch(pokemon)
  //     const json = await res.json()

  //     return {
  //       name: json.name
  //     }
  //   }

  //   pokemonList.map(pokemon => (
  //     fetchPokemonData(pokemon.url)
  //       .then(data => setPokemonDataList(prevState => {
  //         console.log(prevState.length)
  //         if (prevState.length === 0) return [data]
  //         if (!prevState.some(data)) {
  //           console.log('if')
  //           return [...prevState, data]
  //         } else {
  //           console.log('else')
  //           return [...prevState]
  //         }
  //       }))
  //   ))

  //   // pokemonList.map(pokemon => {
  //   //   return fetchPokemonData(pokemon.url)
  //   //     .then(poke => setPokemonDataList(prevState => [poke]))
  //   // })
  //   // fetchPokemonData('https://pokeapi.co/api/v2/pokemon/1/')
  //   //   .then(data => setPokemonDataList(data))
  //   // .then(data => console.log(data))
  //   // const data = pokemonList.map(pokemon => (
  //   //   fetchPokemonData(pokemon)
  //   // ))
  //   // const data = pokemonList.map(pokemon => (
  //   //   fetch(pokemon.url)
  //   //     .then(res => res.json())
  //   //     .then(json => ({ name: json.name }))
  //   //     // .then(json => ({ name: json.name }))
  //   //     // .then(data => setPokemonDataList(data))
  //   // ))
  // }, [pokemonList])

  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <ul>
        {pokemonList && pokemonList.map(pokemon => (
          <li key={pokemon.order}>
            <h3>{pokemon.name.toUpperCase()}</h3>
            {
              pokemon.types.map(type => (
                <p key={type}>{type}</p>
              ))
            }
            <img src={pokemon.img} alt={pokemon.name} />
          </li>
        ))}
      </ul>

      <ul />

    </div>
  )
}

export default App
