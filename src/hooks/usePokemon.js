import { useState, useEffect } from 'react'
import { getPokemon } from '../services/getPokemon'

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [startEnd, setStartEnd] = useState([1, 20]) // estado global

  async function fetchPokemonList() {
    const list = []

    for (let i = startEnd[0]; i <= startEnd[1]; i++) {
      list.push(await getPokemon(i))
    }

    console.log(list)

    setPokemonList(list)
  }

  useEffect(() => {
    fetchPokemonList()
  }, [])

  return { pokemonList }
}
