import './PokemonList.css'

export function PokemonList ({ pokemonList }) {
  return (
        <ul>
        {
            pokemonList &&
            <div className='listContent'>
                {
                    pokemonList.map(pokemon => (
                        <li key={pokemon.order} className='pokemonList'>
                            <div className='pokemonCard'>
                                <h3>{pokemon.name.toUpperCase()}</h3>
                                <img src={pokemon.img} alt={pokemon.name} />
                                <div className='typesRow'>
                                    {
                                        pokemon.types.map(type => (
                                            <p key={type}>{type}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </div>
        }
      </ul>
  )
}
