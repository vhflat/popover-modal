import {
    createStore,
    combineReducers
} from 'redux';
import modalReducer from './modalReducer'

export const rootReducer = combineReducers({
    modals: modalReducer
})

export default createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
