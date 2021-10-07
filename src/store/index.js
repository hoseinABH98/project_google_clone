// redux
import { applyMiddleware, combineReducers, createStore } from 'redux';

// middlewares
import thunk from 'redux-thunk';

// reducers
import results from './reducers/resultsReducer';

// combine reducers
const rootReducer = combineReducers({
  results,
});

// configure store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
