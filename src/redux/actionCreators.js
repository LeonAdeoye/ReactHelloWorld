import {BUY_CAKE, BUY_ICE_CREAM} from "./actionTypes";
import {reduxLogger} from "redux-logger";

export const logger = reduxLogger.createLogger();

// An action creator returns an action.
export const buyCake = () =>
{
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

export const buyIceCream = () =>
{
    return {
        type: BUY_ICE_CREAM,
        info: 'Second redux action'
    }
}
