import * as types from '../actions/actions-types'

const initialState = {
    loading: false,
    error: null
  }
  
  export default (state = initialState, action) => {
    switch (action.type){

      case types.GET_POSTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          allPosts: action.allPosts,
        }
      }

      case types.ORDER_POST_VOTE_DEFAULT: {
        let arrayOrder = action.items.sort((a, b) => {
            return a.voteScore < b.voteScore;
        })
        return {
            ...state,
            allPostsOrderVote: arrayOrder,
        }
      }

      case types.ORDER_UP: {
        let orderUpData = action.orderDataUp.sort((a, b) => {
            return a[action.typeOrder] < b[action.typeOrder]

        })
        return {
            ...state,
            allPostsOrderVote: orderUpData.map(data => (data)),
        }
      }      

      case types.ORDER_DOWN: {
        let orderDownData = action.orderDataDown.sort((a, b) => {
            return a[action.typeOrder] > b[action.typeOrder]
        })
        return {
            ...state,
            allPostsOrderVote: orderDownData.map(data => (data)),
        }
      }      

      case types.IS_ERROR_POST: {
        return {
          ...state,
          error: action.error,
          loading: false,
        }
      }
   
    case types.IS_LOADING_POST: {
        return {
          ...state,
          loading: true,
        }
      }    

      case types.POST_DATA_POST_SUCCESS: {
        return {
          ...state,
          loading: false,
          allPosts: state.allPosts.concat(action.dataPost),
          postSuccess: true
        }
      }

      case types.PUT_DATA_POST_SUCCESS: {
        let postModified = state.allPosts.map(post => {
            if(post.id === action.dataPost.id){
                post = action.dataPost
            }
            return post
        })

        return {
          ...state,
          loading: false,
          allPosts: postModified,
          postSuccess: true
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
          
        let votes = state.allPosts.map(post => {
            if(post.id === action.dataVote.id){
                post.voteScore = action.dataVote.voteScore
            }
            return post
        }
      )

        return {
          ...state,
          loading: false,
          allPosts:  votes,
          postSuccess: true
        }
      }

      case types.POST_DATA_DELETE: {

        let postModified = state.allPosts.filter((post) => {
            if (post.id !== action.dataPost.id) {
              return post;
            }
        })

        return {
          ...state,
          loading: false,
          allPosts: postModified,
          isPostDeleted: true,
        }
      }      

  
      default:
        return state
    }
  }
