import { useState, createContext } from 'react'

export const ComparePokemonContext = createContext()

export function ComparePokemonProvider ({ children }) {
  const [comparePokemon, setComparePokemon] = useState([])

  const addPokemonToCompare = pokemon => {
    const comparePokemon = pokemon.findIndex(poke => poke.id === pokemon.id)
    if (comparePokemon >= 0) return

    setComparePokemon(prevState => ([
      ...prevState,
      {
        comparePokemon
      }
    ]))
  }

  const removePokemonFromCompare = pokemon => {
    setComparePokemon(prevState => prevState.filter(poke => poke.id !== pokemon.id))
  }

  const clearCompare = () => {
    setComparePokemon([])
  }

  return (
    <ComparePokemonContext.Provider value={{
      comparePokemon,
      addPokemonToCompare,
      removePokemonFromCompare,
      clearCompare
    }}>
        {children}
    </ComparePokemonContext.Provider>
  )
}
