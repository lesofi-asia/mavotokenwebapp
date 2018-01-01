import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

let store = null;

export default function create() {
    if (!store) {
        store = createStore(
            reducer,
            applyMiddleware(thunk)
        )
    }
    return store;
}