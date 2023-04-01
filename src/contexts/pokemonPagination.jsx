import { useState, createContext, useEffect } from 'react'

export const PokemonPaginationContext = createContext()

export function PokemonPaginationProvider ({ children }) {
  const [paginationNumber, setPaginationNumber] = useState(20)
  const [pokemonPagination, setPokemonPagination] = useState({
    start: 1,
    end: paginationNumber
  })

  useEffect(() => {
    setPokemonPagination(prevState => {
      if (prevState.start === 1) {
        const end = prevState.end + (paginationNumber - prevState.end)
        return {
          start: prevState.start,
          end
        }
      }
      return {
        ...prevState
      }
    })
  }, [paginationNumber])

  return (
    <PokemonPaginationContext.Provider value={{
      pokemonPagination,
      setPokemonPagination,
      paginationNumber,
      setPaginationNumber
    }}
    >
      {children}
    </PokemonPaginationContext.Provider>
  )
}
