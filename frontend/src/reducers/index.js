import postInfo from './post-info-reducer'
import categoryInfo from './category-info-reducer'
import commentsInfo from './comments-info-reducer'
import { reducer as formReducer } from 'redux-form'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    postInfo,
    categoryInfo,
    commentsInfo,
    form: formReducer
  })
  
  export default rootReducer
  