import { useState, useEffect } from 'react'
import { getPokemonByName } from '../services/getPokemon'

export function usePokemonDetail(name) {
    const [pokemonDetail, setPokemonDetail] = useState()

    useEffect(() => {
        console.log('--------------')
        getPokemonByName(name)
            .then(res => setPokemonDetail(res))
    }, [])

    return { pokemonDetail }
}
