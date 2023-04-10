import { useParams, useNavigate } from 'react-router-dom'
import { usePokemonDetail } from '../hooks/usePokemonDetail'
import { ProgressBar } from '../components/ProgressBar'
import '../components/PokemonDetail.css'

export function PokemonDetail () {
  const navigate = useNavigate()
  const { pokemonName } = useParams()
  const { pokemonDetail } = usePokemonDetail(pokemonName)

  return (
    <>
        { pokemonDetail &&
            <div>
                <h1>{pokemonDetail.name.toUpperCase()}</h1>
                <div className='detailsContent'>
                  <img className='detailImg' src={pokemonDetail.img} alt={pokemonDetail.name} />
                    <ul className='statList'>
                      <div>
                          <h3>Base Stats</h3>
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
                      </div>
                    </ul>
                </div>
            </div>
        }
        <footer>
          <button onClick={() => navigate('/')}>BACK</button>
        </footer>
    </>

  )
}
