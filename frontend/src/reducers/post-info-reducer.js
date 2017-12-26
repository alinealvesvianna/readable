import * as types from '../actions/actions-types'


const initialState = {
    loading: false,
    error: null
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {

      case types.GET_POSTS: {
        return {
          ...state,
          loading: true,
        }
      }

      case types.GET_POSTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          allPosts: action.allPosts,
        //  ...action.allPosts,
        }
      }

      case types.GET_POSTS_ERROR: {
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
