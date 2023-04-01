import { useState, createContext } from 'react'

export const PokemonPaginationContext = createContext()

export function PokemonPaginationProvider ({ children }) {
  const [pokemonPagination, setPokemonPagination] = useState({
    start: 1,
    end: 20
  })

  return (
    <PokemonPaginationContext.Provider value={{
      pokemonPagination,
      setPokemonPagination
    }}
    >
        {children}
    </PokemonPaginationContext.Provider>
  )
}
