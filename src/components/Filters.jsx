/* eslint-disable react/prop-types */
import './Filters.css'
import { useContext } from 'react'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export function Filters () {
  const { setPaginationNumber, setPokemonSearch } = useContext(PokemonPaginationContext)

  const handleOnSelect = (event) => {
    setPaginationNumber(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setPokemonSearch(event.target.searchPokemon.value)
  }

  // const handleClearFitlers = () => {
  //   setPaginationNumber(20)
  //   setPokemonSearch('')
  // }

  return (
    <section className='rowFilters'>
      <div className="paginationInput">
        <p>Nº Pokemon</p>
        <select onChange={handleOnSelect}>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={80}>80</option>
            <option value={100}>100</option>
        </select>
      </div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            name='searchPokemon'
            type='text'
            placeholder='Bulbasaur' />
        </form>
      </div>
      {/* <button onClick={() => handleClearFitlers()}>Clear Filters</button> */}
    </section>
  )
}
