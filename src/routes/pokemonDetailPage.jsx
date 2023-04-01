import { useParams } from 'react-router-dom'
import { usePokemonDetail } from '../hooks/usePokemonDetail'
import '../components/PokemonDetail.css'

const MAX_STAT = 255

export function PokemonDetail () {
  const { pokemonName } = useParams()
  const { pokemonDetail } = usePokemonDetail(pokemonName)

  return (
    <div>
        <h1>Pokemon</h1>
        { pokemonDetail &&
            <div>
                <h3>{pokemonDetail.name.toUpperCase()}</h3>
                <img src={pokemonDetail.img} alt={pokemonDetail.name} />
                <ul className='statList'>
                  {
                    pokemonDetail.stats.map(stat => (
                      <li key={stat.name} className='statRow'>
                        <p >{stat.name.toUpperCase()}</p>
                        <div className='baseStatLine'>
                          <p
                            style={{
                              backgroundColor: 'yellow',
                              borderRadius: '50px',
                              width=`${stat.base_stat/MAX_STAT}`
                            }}
                          > {stat.base_stat}</p>
                          <p> / {MAX_STAT}</p>
                        </div>

                      </li>
                    ))
                  }
                </ul>
            </div>
        }
    </div>

  )
}
