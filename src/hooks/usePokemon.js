import { useState, useEffect, useContext } from 'react'
import { getPokemon, getPokemonByName } from '../services/getPokemon'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [loadingPokemon, setLoadingPokemon] = useState(false)
  const [errorPokemon, setErrorPokemon] = useState('')
  const [searchPokemon, setSearchPokemon] = useState('')

  const { paginationNumber, pokemonPagination } = useContext(PokemonPaginationContext)

  async function fetchPokemonList() {
    const start = pokemonPagination.start
    const end = pokemonPagination.end

    // console.log('start=' + start)
    // console.log('end=' + pokemonPagination.end)
    const list = []

    for (let i = start; i <= pokemonPagination.end; i++) {
      list.push(await getPokemon(i))
    }

    setPokemonList(list)
  }

  useEffect(() => {
    console.log('fetchPokemonList')
    try {
      setLoadingPokemon(true)
      fetchPokemonList()
    } catch (error) {
      setErrorPokemon(error.message)
    } finally {
      setLoadingPokemon(false)
    }
  }, [pokemonPagination, paginationNumber])

  async function fetchPokemonByNameService(search) {
    setPokemonList(await getPokemonByName(search))
    console.log(pokemonList)
  }

  const fetchPokemonByName = (search) => {
    if (searchPokemon) {
      fetchPokemonByNameService(search)
    }
  }

  return { pokemonList, loadingPokemon, errorPokemon, fetchPokemonByName, searchPokemon, setSearchPokemon }
}
