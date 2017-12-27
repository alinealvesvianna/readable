import * as types from '../actions/actions-types'


const initialState = {
    loading: false,
    error: null
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {

      case types.GET_CATEGORIES: {
        return {
          ...state,
          loading: true,
        }
      }

      case types.GET_CATEGORIES_SUCCESS: {
        return {
          ...state,
          loading: false,
          allCategories: action.allCategories,
        }
      }

      case types.GET_CATEGORIES_ERROR: {
        return {
          ...state,
          error: action.error,
          loading: false,
        }
      }
  
      default:
        return state
    }
  }
