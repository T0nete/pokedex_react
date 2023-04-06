import { useState, useEffect, useContext } from 'react'
import { getPokemon, getPokemonByName } from '../services/getPokemon'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [loadingPokemon, setLoadingPokemon] = useState(false)
  const [errorPokemon, setErrorPokemon] = useState('')
  const [searchPokemon, setSearchPokemon] = useState('')

  const { paginationNumber, pokemonPagination } = useContext(PokemonPaginationContext)

  async function fetchPokemonList () {
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
    console.log('useEffect')
    try {
      setLoadingPokemon(true)
      fetchPokemonList()
    } catch (error) {
      setErrorPokemon(error.message)
    } finally {
      setLoadingPokemon(false)
    }
  }, [pokemonPagination, paginationNumber])

  async function fetchPokemonByNameService () {
    const list = []
    const pokemon = await getPokemonByName(searchPokemon)
    list.push(pokemon)
    await setPokemonList(list)
  }

  useEffect(() => {
    if (!searchPokemon) return

    try {
      setLoadingPokemon(true)
      fetchPokemonByNameService()
    } catch (error) {
      setErrorPokemon(error.message)
    } finally {
      setLoadingPokemon(false)
    }
  }, [searchPokemon])

  const fetchPokemonByName = (search) => {
    if (search) {
      fetchPokemonByNameService(search)
    }
  }

  return { pokemonList, fetchPokemonList, loadingPokemon, errorPokemon, fetchPokemonByName, searchPokemon, setSearchPokemon }
}
