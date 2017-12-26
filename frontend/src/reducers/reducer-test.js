import * as types from '../actions/actions-types'


const initialState = {
    teste: false,
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {

      case types.TESTE: {
        return {
          ...state,
          teste: true,
        }
      }
      default:
        return state
    }
  }
