import { useContext } from 'react'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export function NextPreviousPokemon () {
  const { setPokemonPagination, paginationNumber } = useContext(PokemonPaginationContext)

  const handleOnClickNext = () => {
    setPokemonPagination(prevState => ({
      start: prevState.start + paginationNumber,
      end: prevState.end + paginationNumber
    }))
  }

  const handleOnClickPrevious = () => {
    setPokemonPagination(prevState => {
      if (prevState.start > paginationNumber) {
        return {
          start: prevState.start - paginationNumber,
          end: prevState.end - paginationNumber
        }
      }
      return {
        ...prevState
      }
    })
  }

  return (
    <footer>
        <button onClick={() => handleOnClickPrevious()}>Previous</button>
        <button onClick={() => handleOnClickNext()}>Next</button>
    </footer>
  )
}
