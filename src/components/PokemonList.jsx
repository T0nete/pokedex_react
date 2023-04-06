/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './PokemonList.css'
import { TypeIcon } from './Types'
import { usePokemon } from '../hooks/usePokemon'

export function PokemonList () {
  const { pokemonList, loadingPokemon, errorPokemon, setSearchPokemon, fetchPokemonList } = usePokemon()

  return (
    <ul className='pokemonList'>
    {
        pokemonList.map(pokemon => (
            <li key={pokemon.id} className='pokemonCard'>
                <Link to={`pokemon/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                    <img src={pokemon.img} alt={pokemon.name} />
                    <div className='typesRow'>
                        {
                        pokemon.types.map(type => (
                            <TypeIcon key={`${pokemon.name}-${type}`} type={type} />
                        ))
                        }
                    </div>
                </Link>
            </li>
        ))
    }
    </ul>
  )
}
