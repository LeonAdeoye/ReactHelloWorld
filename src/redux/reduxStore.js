import redux from 'redux';
import {cakeReducer, iceCreamReducer, shopReducer} from "./reducers";
import {buyCake, buyIceCream, logger} from "./actionCreators";

const combineReducers = redux.combineReducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const applyMiddleware = redux.applyMiddleware();
const store = redux.createStore(rootReducer, applyMiddleware(logger));


console.log('Initial state', store.getState());

const unSubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

unSubscribe();



