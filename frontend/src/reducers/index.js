import postInfo from './post-info-reducer'
import testeReducer from './reducer-test'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    postInfo,
    testeReducer
  })
  
  export default rootReducer
  