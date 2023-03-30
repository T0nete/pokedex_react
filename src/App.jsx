import './App.css'
import { PokemonList } from './components/PokemonList'
import { usePokemon } from './hooks/usePokemon'

function App () {
  const { pokemonList } = usePokemon()

  return (
    <div className='App'>
      <h1>Pokedex</h1>
        <PokemonList pokemonList={pokemonList}/>
      <ul />

    </div>
  )
}

export default App
