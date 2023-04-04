import { useParams } from 'react-router-dom'
import { usePokemonDetail } from '../hooks/usePokemonDetail'
import '../components/PokemonDetail.css'
import { ProgressBar } from '../components/ProgressBar'

export function PokemonDetail () {
  const { pokemonName } = useParams()
  const { pokemonDetail } = usePokemonDetail(pokemonName)

  return (
    <div>
        <h1>Pokemon</h1>
        { pokemonDetail &&
            <div>
                <h3>{pokemonDetail.name.toUpperCase()}</h3>
                <div className='detailsContent'>
                  <img src={pokemonDetail.img} alt={pokemonDetail.name} />
                    <ul className='statList'>
                      {
                        pokemonDetail.stats.map(stat => {
                          return (
                            <li key={stat.name} className='statRow'>
                              <p>{stat.name.toUpperCase()}</p>
                              <ProgressBar baseStat ={stat.base_stat} />
                            </li>
                          )
                        })
                      }
                    </ul>
                </div>
            </div>
        }
    </div>

  )
}
