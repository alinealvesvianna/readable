import * as types from '../actions/actions-types'

const initialState = {
    loading: false,
    error: null
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {

      case types.GET_COMMENTS: {
        return {
          ...state,
          loading: true,
        }
      }

      case types.GET_COMMENTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          allComments: action.allComments,
        }
      }

      case types.GET_COMMENTS_ERROR: {
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
