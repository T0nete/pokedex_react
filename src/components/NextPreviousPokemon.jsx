import { useContext } from 'react'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export function NextPreviousPokemon () {
  const { pokemonPagination, setPokemonPagination } = useContext(PokemonPaginationContext)

  const handleOnClickNext = () => {
    setPokemonPagination(prevState => ({
      start: prevState.start + 20,
      end: prevState.end + 20
    }))
  }

  const handleOnClickPrevious = () => {
    setPokemonPagination(prevState => {
      if (prevState.start > 20) {
        return {
          start: prevState.start - 20,
          end: prevState.end - 20
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
