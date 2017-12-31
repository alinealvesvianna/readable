import * as types from './actions-types'
import {getAllApi, postDataApi} from '../utils/api'


const isLoadingPost = () => ({
    type: types.IS_LOADING_POST,
})

const getPostsSuccess = (allPosts) => {
    return dispatch => {
        dispatch({
            type: types.GET_POSTS_SUCCESS,
            allPosts
        })
    }
}

const isErrorPost = (error) => ({
    type: types.IS_ERROR_POST,
    error
})    

const postDataPostSuccess = (dataPost) => {
    return dispatch => {
        dispatch({
            type: types.POST_DATA_POST_SUCCESS,
            dataPost
        })
    }    
}

export const getAllPostsAction = () => {
	return dispatch => {
  	 dispatch(isLoadingPost())
     getAllApi("/posts")

    .then(data => dispatch(getPostsSuccess(data)))
    .catch(error => dispatch(isErrorPost(error.message)))
  }
}

export const postDataPostAction = (data) => {
    return dispatch => {
        dispatch(isLoadingPost())
        postDataApi('/posts', data)
        .then(data => dispatch(postDataPostSuccess(data)))
        .catch(error => dispatch(isErrorPost(error.message)))
    }
}