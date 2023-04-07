import { useId } from 'react'
import { useComparePokemon } from '../hooks/useComparePokemon'
import pokeballIcon from '../assets/pokemon-icon.svg'
import pokeballOpen from '../assets/pokeball-open.png'
import removeIcon from '../assets/remove.png'
import './ComparePokemon.css'
import { Link } from 'react-router-dom'

function CartPokemon ({ id, name, img }) {
  const { removePokemonFromCompare } = useComparePokemon()
  return (
      <li>
        <img
          src={img}
          alt={name}
        />
        <div className='row'>
          <p><strong>{name.toUpperCase()}</strong></p>
          <img onClick={() => removePokemonFromCompare(id)} src={removeIcon}/>
        </div>
      </li>
  )
}

function renderButtons (comparePokemon) {
  return comparePokemon && comparePokemon.length === 2
}

export function ComparePokemon () {
  const cartCheckboxId = useId()
  const { comparePokemon, addPokemonToCompare, clearCompare } = useComparePokemon()

  return (
      <>
        <label className='compare-button' htmlFor={cartCheckboxId}>
          <p>Compare 2 Pokemon</p>
          <img src={pokeballIcon} alt='Compare Button'/>
        </label>
        <input id={cartCheckboxId} type='checkbox' style={{ display: 'none' }}/>

        <aside className='compare'>
          <ul className='compareList'>
            {
              comparePokemon.map(pokemon => (
                <CartPokemon
                  key={pokemon.id}
                  {...pokemon}
                />
              ))
            }
          </ul>
          <div className='buttonsRow'>
            <button className='clearButton' onClick={clearCompare}>
              {/* <img src={pokeballOpen}/> */}
              <p>Clear</p>
            </button>
            {
              renderButtons(comparePokemon) &&
                <Link to={`compare/pokemon1/${comparePokemon[0].name}/pokemon2/${comparePokemon[1].name}`} style={{ textDecoration: 'none' }}>
                  <button className='clearButton'>
                    <p>Compare</p>
                  </button>
                </Link>
            }

          </div>
        </aside>
      </>
  )
}
