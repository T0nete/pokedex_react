import { Link } from 'react-router-dom'
import './PokemonList.css'
import { TypeIcon } from './Types'
import { usePokemon } from '../hooks/usePokemon'
import { ComparePokemon } from './ComparePokemon'
import { useComparePokemon } from '../hooks/useComparePokemon'
import pokeballIcon from '../assets/pokemon-icon.svg'

export function PokemonList () {
  const { pokemonList, loadingPokemon } = usePokemon()
  const { addPokemonToCompare } = useComparePokemon()

  return (
    <div>
        {loadingPokemon && <p>Loading...</p>}
        <ul className='pokemonList'>
        {
            pokemonList.map(pokemon => (
                <li key={pokemon.id} className='pokemonCard'>
                    <div className='pokemonDetailTop'>
                        <h3>{pokemon.name.toUpperCase()}</h3>
                        <img
                            className='pokeballIconCompare'
                            src={pokeballIcon}
                            alt='pokeball'
                            onClick={() => addPokemonToCompare(pokemon)}
                        />
                    </div>
                    <Link to={`pokemon/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                        <img src={pokemon.img} alt={pokemon.name} />
                    </Link>
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
        <ComparePokemon/>
    </div>

  )
}
