import redux from 'redux';
import {cakeReducer, iceCreamReducer, shopReducer} from "./reducers";
import {buyCake, buyIceCream} from "./actionCreators";

const combineReducers = redux.combineReducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = redux.createStore(rootReducer);


console.log('Initial state', store.getState());

const unSubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

unSubscribe();



