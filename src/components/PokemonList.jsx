import { usePokemon } from '../hooks/usePokemon'
import './PokemonList.css'
import { TypeIcon } from './Types'

export function PokemonList ({ startEnd }) {
  const { pokemonList, loadingPokemon, errorPokemon } = usePokemon({ startEnd })

  return (
        <ul className='pokemonList'>
        {
            pokemonList.map(pokemon => (
                <li key={pokemon.order} className='pokemonCard'>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                    <img src={pokemon.img} alt={pokemon.name} />
                    <div className='typesRow'>
                        {
                        pokemon.types.map(type => (
                            <TypeIcon type={type} />
                        ))
                        }
                    </div>
                </li>
            ))
        }
      </ul>
  )
}
