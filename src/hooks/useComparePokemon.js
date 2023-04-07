import { useContext } from 'react'
import { ComparePokemonContext } from '../contexts/comparePokemon'

export const useComparePokemon = () => {
  const context = useContext(ComparePokemonContext)

  if (context === undefined) {
    throw new Error('useCart must be used withina ComparePokemonProvider')
  }

  return context
}
