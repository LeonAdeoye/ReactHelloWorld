import {BUY_CAKE, BUY_ICE_CREAM} from "./actionTypes";

const initialState =
{
    numOfCakes: 10,
    numOfIceCreams: 20
}

const initialCakeState =
{
    numOfCakes: 10
}

const initialIceCreamState =
{
    numOfIceCreams: 20
}

export const shopReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}

export const cakeReducer = (state = initialCakeState, action) =>
{
    switch(action.type)
    {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

export const iceCreamReducer = (state = initialIceCreamState, action) =>
{
    switch(action.type)
    {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}
