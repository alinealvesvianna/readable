import postInfo from './post-info-reducer'
import categoryInfo from './category-info-reducer'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    postInfo,
    categoryInfo
  })
  
  export default rootReducer
  