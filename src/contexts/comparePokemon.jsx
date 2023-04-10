import { useReducer, createContext } from 'react'
import { compareReducer, compareInitialState, COMPARE_ACTIONS_TYPES } from '../reducers/comparationPokemon'

export const ComparePokemonContext = createContext()

function useCompareReducer () {
  const [state, dispatch] = useReducer(compareReducer, compareInitialState)

  const checkPokemonInCompare = pokemon => dispatch({
    type: COMPARE_ACTIONS_TYPES.CHECK_POKEMON_IN_COMPARE,
    payload: pokemon
  })

  const addPokemonToCompare = pokemon => dispatch({
    type: COMPARE_ACTIONS_TYPES.ADD_TO_COMPARATION,
    payload: pokemon
  })

  const removePokemonFromCompare = pokemon => dispatch({
    type: COMPARE_ACTIONS_TYPES.REMOVE_FROM_COMPARATION,
    payload: pokemon
  })

  const clearCompare = () => dispatch({
    type: COMPARE_ACTIONS_TYPES.CLEAR_COMPARATION
  })

  return { state, checkPokemonInCompare, addPokemonToCompare, removePokemonFromCompare, clearCompare }
}

export function ComparePokemonProvider ({ children }) {
  // const [comparePokemon, setComparePokemon] = useState([])

  // const checkPokemonInCompare = pokemon => {
  //   return comparePokemon.some(poke => poke.id === pokemon.id)
  // }

  // const addPokemonToCompare = pokemon => {
  //   if (comparePokemon.length === 2) return

  //   const comparePokemonId = comparePokemon.findIndex(poke => poke.id === pokemon.id)
  //   if (comparePokemonId >= 0) return

  //   setComparePokemon(prevState => ([
  //     ...prevState,
  //     {
  //       id: pokemon.id,
  //       name: pokemon.name,
  //       img: pokemon.img
  //     }
  //   ]))
  // }

  // const removePokemonFromCompare = id => {
  //   setComparePokemon(prevState => prevState.filter(poke => poke.id !== id))
  // }

  // const clearCompare = () => {
  //   setComparePokemon([])
  // }

  const { state, checkPokemonInCompare, addPokemonToCompare, removePokemonFromCompare, clearCompare } = useCompareReducer()

  return (
    <ComparePokemonContext.Provider value={{
      comparePokemon: state,
      checkPokemonInCompare,
      addPokemonToCompare,
      removePokemonFromCompare,
      clearCompare
    }}>
        {children}
    </ComparePokemonContext.Provider>
  )
}
