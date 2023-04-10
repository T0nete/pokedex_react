export const compareInitialState = JSON.parse(window.localStorage.getItem('compare')) || []

export const COMPARE_ACTIONS_TYPES = {
  CHECK_POKEMON_IN_COMPARE: 'CHECK_PRODUCT_IN_COMPARE',
  ADD_TO_COMPARATION: 'ADD_TO_COMPARATION',
  REMOVE_FROM_COMPARATION: 'REMOVE_FROM_COMPARATION',
  CLEAR_COMPARATION: 'CLEAR_COMPARATION'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('compare', JSON.stringify(state))
}

export const compareReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case COMPARE_ACTIONS_TYPES.CHECK_POKEMON_IN_COMPARE: {
      const { id } = actionPayload

      const newState = state.some(poke => poke.id === id)
      updateLocalStorage(newState)

      return newState
    }
    case COMPARE_ACTIONS_TYPES.ADD_TO_COMPARATION: {
      if (state.length === 2) return state

      const { id } = actionPayload
      const comparePokemonId = state.findIndex(poke => poke.id === id)
      if (comparePokemonId >= 0) return state

      const newState = [
        ...state,
        {
          ...actionPayload
        }
      ]

      updateLocalStorage(newState)

      return newState
    }
    case COMPARE_ACTIONS_TYPES.REMOVE_FROM_COMPARATION: {
      const { id } = actionPayload
      const newState = state.filter(poke => poke.id !== id)

      updateLocalStorage(newState)

      return newState
    }
    case COMPARE_ACTIONS_TYPES.CLEAR_COMPARATION: {
      const newState = []
      updateLocalStorage(newState)
      return newState
    }
  }
}
