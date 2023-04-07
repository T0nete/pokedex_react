import { useState, createContext } from 'react'

export const ComparePokemonContext = createContext()

export function ComparePokemonProvider ({ children }) {
  const [comparePokemon, setComparePokemon] = useState([])

  const checkPokemonInCompare = pokemon => {
    return comparePokemon.some(poke => poke.id === pokemon.id)
  }

  const addPokemonToCompare = pokemon => {
    if (comparePokemon.length === 2) return

    const comparePokemonId = comparePokemon.findIndex(poke => poke.id === pokemon.id)
    if (comparePokemonId >= 0) return

    setComparePokemon(prevState => ([
      ...prevState,
      {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.img
      }
    ]))
  }

  const removePokemonFromCompare = id => {
    setComparePokemon(prevState => prevState.filter(poke => poke.id !== id))
  }

  const clearCompare = () => {
    setComparePokemon([])
  }

  return (
    <ComparePokemonContext.Provider value={{
      comparePokemon,
      checkPokemonInCompare,
      addPokemonToCompare,
      removePokemonFromCompare,
      clearCompare
    }}>
        {children}
    </ComparePokemonContext.Provider>
  )
}
