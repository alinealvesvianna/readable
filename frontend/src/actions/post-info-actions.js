import * as types from './actions-types'
import {getAllApi, postDataApi, putDataApi, deleteDataApi} from '../utils/api'


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

const orderPostVoteDefault = () => {
    return (dispatch, getState) => {
        let items = getState().postInfo.allPosts
        dispatch({
            type: types.ORDER_POST_VOTE_DEFAULT,
            items      
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

const putDataPostSuccess = (dataPost) => {
    return dispatch => {
        dispatch({
            type: types.PUT_DATA_POST_SUCCESS,
            dataPost
        })
    }    
}

const deleteDataPostSuccess = (dataPost) => {
    return dispatch => {
        dispatch({
            type: types.POST_DATA_DELETE,
            dataPost
        })
    }    
}

const voteErrorPost = error => ({
    type: types.VOTE_ERROR_POST,
    error
})

const voteSuccessPost = dataVote => {
    return dispatch => {
       dispatch({
            type: types.VOTE_SUCCESS_POST,
            dataVote
        })
    }
}

const orderDown = (typeOrder) => {
    return (dispatch, getState) => {
        let orderDataDown = getState().postInfo.allPosts
        dispatch({
            type: types.ORDER_DOWN,
            typeOrder,
            orderDataDown
        })
    }
}

const orderUp = (typeOrder) => {
    return (dispatch, getState) => {
        let orderDataUp = getState().postInfo.allPosts
        dispatch({
            type: types.ORDER_UP,
            typeOrder,
            orderDataUp
        })
    }
}

export const getAllPostsAction = () => {
	return dispatch => {
  	 dispatch(isLoadingPost())
     getAllApi("/posts")
    .then(data => dispatch(getPostsSuccess(data)))
    .then(() => dispatch(orderPostVoteDefault()))
    .catch(error => dispatch(isErrorPost(error.message)))
  }
}

export const postDataPostAction = (data) => {
    return dispatch => {
        dispatch(isLoadingPost())
        postDataApi('/posts', data)
        .then(data => dispatch(postDataPostSuccess(data)))
        .then(() => dispatch(orderPostVoteDefault()))
        .catch(error => dispatch(isErrorPost(error.message)))
    }
}

export const putDataPostAction = (id, data) => {
    return dispatch => {
        dispatch(isLoadingPost())
        putDataApi(`/posts/${id}`, data)
        .then(data => dispatch(putDataPostSuccess(data)))
        .then(() => dispatch(orderPostVoteDefault()))
        .catch(error => dispatch(isErrorPost(error.message)))
    }
}

export const deleteDataPostAction = (id, data) => {
    return dispatch => {
        dispatch(isLoadingPost())
        deleteDataApi(`/posts/${id}`, data)
        .then(data => dispatch(deleteDataPostSuccess(data)))
        .then(() => dispatch(orderPostVoteDefault()))
        .catch(error => dispatch(isErrorPost(error.message)))
    }
}

export const postVoteAction = (id, data) => {
    return dispatch => {
        dispatch(isLoadingPost)
        postDataApi(`posts/${id}`, data)
        .then(data => dispatch(voteSuccessPost(data)))
        .then(() => dispatch(orderPostVoteDefault()))
        .catch(error => dispatch(voteErrorPost(error.message)))
    }
}

export const orderPostAction = (orderName, typeOrder) => {
    return dispatch => {
        if(orderName === 'orderDown'){
            dispatch(orderDown(typeOrder)) 
        }
        else {
            dispatch(orderUp(typeOrder))
        }
    }
}