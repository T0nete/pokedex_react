import { useState, useEffect } from 'react'
import { getPokemon } from '../services/getPokemon'

export const usePokemon = ({ startEnd }) => {
  const [pokemonList, setPokemonList] = useState([])
  const [loadingPokemon, setLoadingPokemon] = useState(false)
  const [errorPokemon, setErrorPokemon] = useState('')

  async function fetchPokemonList () {
    const list = []

    for (let i = startEnd[0]; i <= startEnd[1]; i++) {
      list.push(await getPokemon(i))
    }

    setPokemonList(list)
  }

  useEffect(() => {
    try {
      setLoadingPokemon(true)
      fetchPokemonList()
    } catch (error) {
      setErrorPokemon(error.message)
    } finally {
      setLoadingPokemon(false)
    }
  }, [])

  return { pokemonList, loadingPokemon, errorPokemon }
}
