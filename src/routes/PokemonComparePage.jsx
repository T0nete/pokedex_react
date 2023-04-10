import { useParams, useNavigate } from 'react-router-dom'
import { usePokemonDetail } from '../hooks/usePokemonDetail'
import '../components/PokemonComparePage.css'
import { ProgressBarCompare } from '../components/ProgressBarCompare'

function comparePokemonBar (stats1, stats2) {
  if (stats1.length !== stats2.length) return
  console.log(stats1)
  const statsList = []
  for (let i = 0; i < stats1.length; i++) {
    statsList.push(
        <li key={stats1[i].name} className='baseStat'>
            <p>{stats1[i].name.toUpperCase()}</p>
            <ProgressBarCompare
              baseStat1 ={stats1[i].base_stat}
              baseStat2 ={stats2[i].base_stat}/>
        </li>
    )
  }
  return statsList
}

export function PokemonComparePage () {
  const navigate = useNavigate()
  const { pokemonName1, pokemonName2 } = useParams()
  const { pokemonDetail: pokemonDetail1 } = usePokemonDetail(pokemonName1)
  const { pokemonDetail: pokemonDetail2 } = usePokemonDetail(pokemonName2)

  return (
    <>
        { (pokemonDetail1 && pokemonDetail2) &&
            <div>
                <h1>{pokemonDetail1.name.toUpperCase()} vs {pokemonDetail2.name.toUpperCase()}</h1>
                <div className='compareContent'>
                    <img className='detailImg' src={pokemonDetail1.img} alt={pokemonDetail1.name} />
                        <ul className='statList'>
                        <div>
                            <h3>Base Stats</h3>
                            {comparePokemonBar(pokemonDetail1.stats, pokemonDetail2.stats)}
                        </div>

                        </ul>
                    <img className='detailImg' src={pokemonDetail2.img} alt={pokemonDetail2.name} />
                </div>
            </div>
        }
        <footer>
          <button onClick={() => navigate('/')}>BACK</button>
        </footer>
    </>
  )
}
