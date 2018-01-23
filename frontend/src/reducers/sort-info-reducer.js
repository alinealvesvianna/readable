import * as types from '../actions/actions-types'

const initialState = {
    sortTypeUp: 'voteScore',
    sortTypeDown: '',
  }
  
  export default (state = initialState, action) => {
    switch (action.type){

      case types.SORTDOWN: {
        return {
          ...state,
          sortTypeDown: action.typeOrder
        }
      }

      case types.SORTUP: {
        return {
          ...state,
          sortTypeUp: action.typeOrder
        }
      }
  
  
      default:
        return state
    }
  }
