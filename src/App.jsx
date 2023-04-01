import './components/PokemonList.css'
import { PokemonList } from './components/PokemonList'
import { NextPreviousPokemon } from './components/NextPreviousPokemon'
import { PokemonPaginationProvider } from './contexts/pokemonPagination'

function App () {
  return (
    <PokemonPaginationProvider>
      <div className='bodyContent'>
        <h1>Pokedex</h1>
        <PokemonList/>
        <NextPreviousPokemon />
      </div>
    </PokemonPaginationProvider>
  )
}

export default App
