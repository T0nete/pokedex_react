export const compareInitialState = []

export const COMPARE_ACTIONS_TYPES = {
  ADD_TO_COMPARATION: 'ADD_TO_COMPARATION',
  REMOVE_FROM_COMPARATION: 'REMOVE_FROM_COMPARATION',
  CLEAR_COMPARATION: 'CLEAR_COMPARATION'
}

export function comparationReducer (state, action) {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case COMPARE_ACTIONS_TYPES.ADD_TO_COMPARATION : {
      const { id } = actionPayload
      const pokemonInIndex = state.findIndex(poke => poke.id === id)

      if (pokemonInIndex >= 0) {
        return state
      }

      return [
        ...state,
        {
          ...state
        }
      ]
    }
    case COMPARE_ACTIONS_TYPES.REMOVE_FROM_COMPARATION : {
      const { id } = actionPayload
      return state.filter(poke => poke.id !== id)
    }
    case COMPARE_ACTIONS_TYPES.CLEAR_COMPARATION : {
      return compareInitialState
    }
  }
}

export const comparationPokemonReducer = (state, action) => {
  const { type: actionType } = action
}
