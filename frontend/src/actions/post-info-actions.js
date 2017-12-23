import * as types from './actions-types'
import {getAllPostsApi} from '../utils/api'


const getPosts = () => ({
    type: types.GET_POSTS,
})

const getPostsSuccess = (allPosts) => {
    return dispatch => {
        dispatch({
            type: types.GET_POSTS_SUCCESS,
            allPosts
        })
    }
}

const getPostsError = (error) => ({
    type: types.GET_POSTS_ERROR,
    error
})    

export const getAllPostsAction = () => {
	return dispatch => {
  	 dispatch(getPosts())
     getAllPostsApi()
    .then(data => dispatch(getPostsSuccess(data)))
    .catch(error => dispatch(getPostsError(error.message)))
  }
}
