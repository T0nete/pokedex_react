/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { PokemonPaginationContext } from '../contexts/pokemonPagination'

export function Filters ({ fetchPokemonByName, setSearchPokemon }) {
  const { setPaginationNumber } = useContext(PokemonPaginationContext)

  const handleOnSelect = (event) => {
    console.log('pagination ' + event.target.value)
    setPaginationNumber(event.target.value)
  }

  const handleOnChange = (event) => {
    fetchPokemonByName(event.target.value)
  }

  const handleOnSubmit = (event) => {
    console.log(event.target.searchPokemon.value)
    event.preventDefault()
    // console.log(event.target.searchPokemon.value)
    setSearchPokemon(event.target.searchPokemon.value)
    // fetchPokemonByName(event.target.searchPokemon.value)
    // setSearchPokemon(event.target.searchPokemon.value)
  }

  return (
    <section className='rowFilters'>
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
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            name='searchPokemon'
            type='text'
            placeholder='Bulbasaur' />
        </form>
      </div>
    </section>
  )
}
