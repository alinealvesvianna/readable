import * as types from './actions-types'
import {getAllApi, postDataApi, putDataApi, deleteDataApi} from '../utils/api'


const isLoadingComments = () => ({
    type: types.IS_LOADING_COMMENTS,
})


const getCommentsSuccess = (allComments) => {
    return dispatch => {
        dispatch({
            type: types.GET_COMMENTS_SUCCESS,
            allComments
        })
    }
}

const orderComments = () => {
    return (dispatch, getState) => {
        let items = getState().commentsInfo.allComments
        dispatch({
            type: types.ORDER_COMMENTS,
            items      
        })
    }
}

const isCommentsError = (error) => ({
    type: types.IS_COMMENTS_ERROR,
    error
})


const postDataCommentSuccess = (dataComment) => {
    return dispatch => {
        dispatch({
            type: types.POST_DATA_COMMENT_SUCCESS,
            dataComment
        })
    }    
}

const putDataCommentSuccess = (dataComment) => {
    return dispatch => {
        dispatch({
            type: types.PUT_DATA_COMMENT_SUCCESS,
            dataComment
        })
    }    
}

const voteErrorComment = error => ({
    type: types.VOTE_ERROR_COMMENT,
    error
})

const voteSuccessComment = dataVote => {
    return dispatch => {
       dispatch({
            type: types.VOTE_SUCCESS_COMMENT,
            dataVote
        })
    }
}

const deleteCommentSuccess = (dataComment) => {
    return dispatch => {
        dispatch({
            type: types.DELETE_COMMENT_SUCCESS,
            dataComment
        })
    }    
}

export const getAllCommentsAction = (id) => {
	return dispatch => {
  	 dispatch(isLoadingComments())
     getAllApi(`/posts/${id}/comments`)
    .then(data => dispatch(getCommentsSuccess(data)))
    .then(() => dispatch(orderComments()))
    .catch(error => dispatch(isCommentsError(error.message)))
  }
}

export const postDataCommentsAction = (data) => {
    return dispatch => {
        dispatch(isLoadingComments())
        postDataApi('/comments', data)
        .then(data => dispatch(postDataCommentSuccess(data)))
        .then(() => dispatch(orderComments()))
        .catch(error => dispatch(isCommentsError(error.message)))
    }
}

export const putDataCommentAction = (id, data) => {
    return dispatch => {
        dispatch(isLoadingComments())
        putDataApi(`/comments/${id}`, data)
        .then(data => dispatch(putDataCommentSuccess(data)))
        .then(() => dispatch(orderComments()))
        .catch(error => dispatch(isCommentsError(error.message)))
    }
}

export const postVoteCommentAction = (id, data) => {
    return dispatch => {
        dispatch(isLoadingComments())
        postDataApi(`comments/${id}`, data)
        .then(data => dispatch(voteSuccessComment(data)))
        .then(() => dispatch(orderComments()))
        .catch(error => dispatch(voteErrorComment(error.message)))
    }
}

export const deleteCommentAction = (id, data) => {
    return dispatch => {
        dispatch(isLoadingComments())
        deleteDataApi(`/comments/${id}`, data)
        .then(data => dispatch(deleteCommentSuccess(data)))
        .then(() => dispatch(orderComments()))
        .catch(error => dispatch(isCommentsError(error.message)))
    }
}