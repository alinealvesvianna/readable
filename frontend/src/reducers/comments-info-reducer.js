import * as types from '../actions/actions-types'

const initialState = {
    loading: false,
    error: null
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {

      case types.IS_LOADING_COMMENTS: {
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

      case types.IS_COMMENTS_ERROR: {
        return {
          ...state,
          error: action.error,
          loading: false,
        }
      }

      case types.POST_DATA_COMMENT_SUCCESS: {
          return{
            ...state,
            error: false,
            loading: false,
            allComments: state.allComments.concat(action.dataComment),
            postCommentsSuccess: true
          }
      }

      case types.VOTE_ERROR_POST: {
        return {
          ...state,
          error: action.error,
          loading: false,
        }
      }

      case types.VOTE_SUCCESS_POST: {
        let votes = state.allComments.map(comment => {
            if(comment.id === action.dataVote.id){
                comment.voteScore = action.dataVote.voteScore
            }
            return comment
        }
      )

        return {
          ...state,
          loading: false,
          allComments:  votes,
          postCommentsSuccess: true
        }
      }
  
      default:
        return state
    }
  }
