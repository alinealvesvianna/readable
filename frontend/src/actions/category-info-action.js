import * as types from './actions-types'
import {getAllApi} from '../utils/api'



const getCategories = () => ({
    type: types.GET_CATEGORIES,
})

const getCategoriesSuccess = (allCategories) => {
    return dispatch => {
        dispatch({
            type: types.GET_CATEGORIES_SUCCESS,
            allCategories
        })
    }
}

const getCategoriesError = (error) => ({
    type: types.GET_CATEGORIES_ERROR,
    error
})    

export const getAllCategoriesAction = () => {
	return dispatch => {
  	 dispatch(getCategories())
     getAllApi("/categories")
    .then(data => dispatch(getCategoriesSuccess(data)))
    .catch(error => dispatch(getCategoriesError(error.message)))
  }
}
