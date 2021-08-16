import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import itemReducer from './item.reducer'

const RootReducer = combineReducers({
    places: itemReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))


