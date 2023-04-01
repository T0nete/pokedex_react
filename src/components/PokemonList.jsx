import { usePokemon } from '../hooks/usePokemon'
import './PokemonList.css'
import { TypeIcon } from './Types'

export function PokemonList () {
  const { pokemonList, loadingPokemon, errorPokemon } = usePokemon()

  return (
    <ul className='pokemonList'>
    {
        pokemonList.map(pokemon => (
            <li key={pokemon.name} className='pokemonCard'>
                <h3>{pokemon.name.toUpperCase()}</h3>
                <img src={pokemon.img} alt={pokemon.name} />
                <div className='typesRow'>
                    {
                    pokemon.types.map(type => (
                        <TypeIcon key={`${pokemon.name}-${type}`} type={type} />
                    ))
                    }
                </div>
            </li>
        ))
    }
    </ul>
  )
}
