import { useContext } from 'react'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export function NextPreviousPokemon () {
  const { setPokemonPagination, paginationNumber } = useContext(PokemonPaginationContext)

  const handleOnClickNext = () => {
    setPokemonPagination(prevState => ({
      start: parseInt(prevState.start) + parseInt(paginationNumber),
      end: parseInt(prevState.end) + parseInt(paginationNumber)
    }))
  }

  const handleOnClickPrevious = () => {
    setPokemonPagination(prevState => {
      if (prevState.start > paginationNumber) {
        return {
          start: parseInt(prevState.start) - parseInt(paginationNumber),
          end: parseInt(prevState.end) - parseInt(paginationNumber)
        }
      }
      return {
        start: 1,
        end: paginationNumber
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
