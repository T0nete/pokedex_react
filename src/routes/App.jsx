import '../components/PokemonList.css'
import { PokemonList } from '../components/PokemonList'
import { NextPreviousPokemon } from '../components/NextPreviousPokemon'
import { PokemonPaginationProvider } from '../contexts/pokemonPagination'
import { Filters } from '../components/Filters'
import { ComparePokemonProvider } from '../contexts/comparePokemon'

function PokemonHomePage () {
  return (
    <PokemonPaginationProvider>
      <ComparePokemonProvider>
        <div className='bodyContent'>
          <h1>Pokedex</h1>
          <Filters />
          <PokemonList />
          <NextPreviousPokemon />
        </div>
      </ComparePokemonProvider>
    </PokemonPaginationProvider>
  )
}

export default PokemonHomePage
