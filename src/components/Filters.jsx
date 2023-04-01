import { useContext } from 'react'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export function Filters () {
  const { setPaginationNumber } = useContext(PokemonPaginationContext)

  const handleOnSelect = (event) => {
    console.log('pagination ' + event.target.value)
    setPaginationNumber(event.target.value)
  }

  return (
    <section>
        <div className="paginationInput">
            <p>Pokemon per page</p>
            <select onChange={handleOnSelect}>
                <option value={20}>20</option>
                <option value={40}>40</option>
                <option value={60}>60</option>
                <option value={80}>80</option>
                <option value={100}>100</option>
            </select>
        </div>

    </section>
  )
}
