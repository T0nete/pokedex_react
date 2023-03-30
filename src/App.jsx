import './components/PokemonList.css'
import { PokemonList } from './components/PokemonList'
import { usePokemon } from './hooks/usePokemon'

function App () {
  const { pokemonList } = usePokemon()

  return (
    <div className='bodyContent'>
      <h1>Pokedex</h1>
      <PokemonList pokemonList={pokemonList}/>
    </div>
  )
}

export default App
