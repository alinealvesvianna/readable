import * as types from '../actions/actions-types'

const initialState = {
    sortType: null,
  }
  
  export default (state = initialState, action) => {
    switch (action.type){

      case types.SORT: {
        return {
          ...state,
         sortType: action.typeOrder
        }
      }
  
      default:
        return state
    }
  }
