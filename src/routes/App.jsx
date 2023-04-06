import '../components/PokemonList.css'
import { PokemonList } from '../components/PokemonList'
import { NextPreviousPokemon } from '../components/NextPreviousPokemon'
import { PokemonPaginationProvider } from '../contexts/pokemonPagination'
import { Filters } from '../components/Filters'
import { usePokemon } from '../hooks/usePokemon'

function PokemonHomePage () {
  const { pokemonList, loadingPokemon, errorPokemon, setSearchPokemon, fetchPokemonList } = usePokemon()

  return (
    <PokemonPaginationProvider>
      <div className='bodyContent'>
        <h1>Pokedex</h1>
        <Filters setSearchPokemon={setSearchPokemon} fetchPokemonList={fetchPokemonList}/>
        <PokemonList pokemonList={pokemonList}/>
        <NextPreviousPokemon />
      </div>
    </PokemonPaginationProvider>
  )
}

export default PokemonHomePage
