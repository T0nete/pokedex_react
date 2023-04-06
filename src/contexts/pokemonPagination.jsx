import { useState, createContext, useEffect } from 'react'

export const PokemonPaginationContext = createContext()

export function PokemonPaginationProvider ({ children }) {
  const [paginationNumber, setPaginationNumber] = useState(20)
  const [pokemonPagination, setPokemonPagination] = useState({
    start: 1,
    end: paginationNumber
  })
  const [pokemonSearch, setPokemonSearch] = useState('')

  useEffect(() => {
    setPokemonPagination(prevState => {
      // const end = parseInt(prevState.end) + (parseInt(paginationNumber) - parseInt(prevState.end))
      const end = parseInt(prevState.start - 1) + parseInt(paginationNumber)
      // console.log('end ' + end)
      // if (prevState.start === 1) {
      return {
        start: prevState.start,
        end
      }
      // }
      // const start = parseInt(prevState.start) + (parseInt(paginationNumber) - parseInt(prevState.start))
      // console.log('start ' + start)
      // return {
      //   start,
      //   end
      // }
    })
  }, [paginationNumber])

  return (
    <PokemonPaginationContext.Provider value={{
      pokemonPagination,
      setPokemonPagination,
      paginationNumber,
      setPaginationNumber,
      pokemonSearch,
      setPokemonSearch
    }}
    >
      {children}
    </PokemonPaginationContext.Provider>
  )
}
