import { useState, useEffect } from 'react'
import { getPokemonByName } from '../services/getPokemon'

export function usePokemonDetail (name) {
  const [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => {
    getPokemonByName(name)
      .then(res => setPokemonDetail(res))
  }, [])

  return { pokemonDetail }
}
