import '../components/PokemonList.css'
import { PokemonList } from '../components/PokemonList'
import { NextPreviousPokemon } from '../components/NextPreviousPokemon'
import { PokemonPaginationProvider } from '../contexts/pokemonPagination'
import { Filters } from '../components/Filters'

function PokemonHomePage () {
  return (
    <PokemonPaginationProvider>
      <div className='bodyContent'>
        <h1>Pokedex</h1>
        <Filters />
        <PokemonList/>
        <NextPreviousPokemon />
      </div>
    </PokemonPaginationProvider>
  )
}

export default PokemonHomePage
