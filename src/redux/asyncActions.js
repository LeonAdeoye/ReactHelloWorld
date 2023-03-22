import redux from 'redux';
import thunkMiddleware from'redux-thunk'
import axios from "axios";

const applyMiddleWare = redux.applyMiddleware
const createReduxStore = redux.createStore;
const store = createReduxStore(reducer, applyMiddleWare(thunkMiddleware));

store.subscribe(() =>
{
    console.log(store.getState());
})

store.dispatch(fetchUsers())

const initialState = {
    loading: false,
    error: '',
    users: []
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Three Action creators
const fetchUsersRequest = () =>
{
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) =>
{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) =>
{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

// Async creation action
const fetchUsers = () =>
{
    return function(dispatch)
    {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result =>
            {
                dispatch(fetchUsersSuccess(result.data.map(user => user.id)));
            })
            .catch(err =>
            {
                dispatch(fetchUsersFailure(err));
            })
    }
}

