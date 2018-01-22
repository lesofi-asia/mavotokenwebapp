import * as actionTypes from './actionTypes';
import reduce from '../reduce';

const initialState = {
    timestamp: null
}

const navUpdate = (state) => {
    return {
        ...state,
        timestamp: new Date().toISOString()
    }
}

export default reduce(initialState,{
    [actionTypes.TOPNAV_UPDATE]: navUpdate
});