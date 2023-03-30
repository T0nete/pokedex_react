import { useEffect, useState } from 'react'
import { getPokemon, getPokemonData } from '../services/getPokemon'

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonDataList, setPokemonDataList] = useState([])

  useEffect(() => {
    try {
      getPokemon()
        .then(res => (setPokemonList(res.results)))
    } catch (error) {

    }
    // const pokemonList = async () => {
    //   const res = await getPokemon()
    //   setPokemonList(res)
    // }
    // pokemonList()
  }, [])

  useEffect(() => {
    try {
      getPokemonData(pokemonList)
        .then(res => (setPokemonDataList(res)))
        .then(console.log('2 - ' + pokemonDataList))
    } catch (error) {

    }
    // const pokemonData = async () => {
    //   const res = await getPokemonData(pokemonList)
    //   setPokemonDataList(res)
    // }
    // pokemonData()
  }, [pokemonList])

  return { pokemonList, pokemonDataList }
}
