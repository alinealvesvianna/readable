import postInfo from './post-info-reducer'
import categoryInfo from './category-info-reducer'
import commentsInfo from './comments-info-reducer'
import sortInfo from './post-info-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    postInfo,
    sortInfo,
    categoryInfo,
    commentsInfo,
  })
  
  export default rootReducer
  