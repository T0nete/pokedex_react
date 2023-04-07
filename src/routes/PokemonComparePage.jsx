import { useParams, useNavigate } from 'react-router-dom'
import { usePokemonDetail } from '../hooks/usePokemonDetail'

export function PokemonComparePage () {
  const navigate = useNavigate()
  const { pokemonName1, pokemonName2 } = useParams()
  const { pokemonDetail: pokemonDetail1 } = usePokemonDetail(pokemonName1)
  const { pokemonDetail: pokemonDetail2 } = usePokemonDetail(pokemonName2)

  return (
    <>
        { (pokemonDetail1 && pokemonDetail2) &&
            <h1>{pokemonDetail1.name.toUpperCase()} vs {pokemonDetail2.name.toUpperCase()}</h1>
        }
    </>
  )
}
