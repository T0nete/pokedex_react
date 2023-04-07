import { useState, useEffect, useContext } from 'react'
import { getPokemon, getPokemonByName } from '../services/getPokemon'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [loadingPokemon, setLoadingPokemon] = useState(false)
  const [errorPokemon, setErrorPokemon] = useState('')
  const [searchPokemon, setSearchPokemon] = useState('')

  const { paginationNumber, pokemonPagination, pokemonSearch } = useContext(PokemonPaginationContext)

  useEffect(() => {
    async function fetchPokemonList (start, end) {
      // const start = pokemonPagination.start
      // const end = pokemonPagination.end
      const list = []
      for (let i = start; i <= end; i++) {
        const poke = await getPokemon(i)
        list.push(poke)
      }
      return list
      // setPokemonList(list)
    }

    try {
      setLoadingPokemon(true)
      fetchPokemonList(pokemonPagination.start, pokemonPagination.end).then(list => setPokemonList(list))
    } catch (error) {
      setErrorPokemon(error.message)
    } finally {
      setLoadingPokemon(false)
    }
  }, [pokemonPagination, paginationNumber])

  async function fetchPokemonByNameService () {
    const list = []
    const pokemon = await getPokemonByName(pokemonSearch)
    list.push(pokemon)
    setPokemonList(list)
  }

  useEffect(() => {
    if (!pokemonSearch) return

    try {
      setLoadingPokemon(true)
      fetchPokemonByNameService()
    } catch (error) {
      setErrorPokemon(error.message)
    } finally {
      setLoadingPokemon(false)
    }
  }, [pokemonSearch])

  // useEffect(() => {
  //   if (!searchPokemon) return

  //   try {
  //     setLoadingPokemon(true)
  //     fetchPokemonByNameService()
  //   } catch (error) {
  //     setErrorPokemon(error.message)
  //   } finally {
  //     setLoadingPokemon(false)
  //   }
  // }, [searchPokemon])

  const fetchPokemonByName = (search) => {
    if (search) {
      fetchPokemonByNameService(search)
    }
  }

  return { pokemonList, loadingPokemon, errorPokemon, fetchPokemonByName, searchPokemon, setSearchPokemon }
}
