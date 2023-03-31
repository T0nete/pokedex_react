import './components/PokemonList.css'
import { PokemonList } from './components/PokemonList'
import { usePokemon } from './hooks/usePokemon'
import { useState } from 'react'
import { NextPreviousPokemon } from './components/NextPreviousPokemon'

function App () {
  const [startEnd, setStartEnd] = useState([1, 20]) // estado global

  return (
    <div className='bodyContent'>
      <h1>Pokedex</h1>
      <PokemonList startEnd={startEnd}/>
      <NextPreviousPokemon startEnd={startEnd} setStartEnd={setStartEnd}/>
    </div>
  )
}

export default App
