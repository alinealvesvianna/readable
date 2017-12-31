import * as types from './actions-types'
import {getAllApi} from '../utils/api'


const getComments = () => ({
    type: types.GET_COMMENTS,
})


const getCommentsSuccess = (allComments) => {
    return dispatch => {
        dispatch({
            type: types.GET_COMMENTS_SUCCESS,
            allComments
        })
    }
}

const getCommentsError = (error) => ({
    type: types.GET_COMMENTS_ERROR,
    error
})    

export const getAllCommentsAction = (id) => {
	return dispatch => {
  	 dispatch(getComments())
     getAllApi(`/posts/${id}/comments`)
    // apiFetch(`/posts/${id}/comments`)
    .then(data => dispatch(getCommentsSuccess(data)))
    .catch(error => dispatch(getCommentsError(error.message)))
  }
}


