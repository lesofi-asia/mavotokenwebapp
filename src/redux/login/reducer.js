import * as actionTypes from './actionTypes';
import reduce from '../reduce';

const initialState = {
    profile: null,
    jwtToken: null,
    error: null,
    created: false,
    routeLocation: null,
    emailVerify: false,
    emailVerifyError: null,
    emailVerifyDone: false
}

const loginSuccess=(state, action)=>{
    return {
        ...state,
        profile: action.profile,
        jwtToken: action.jwtToken,
        error: null
    }
}

const loginError=(state, action)=>{
    return {
        ...state,
        error: action.error,
        jwtToken: null
    }
}

const logout=(state, action)=> {
    return {
        ...state,
        profile: null,
        jwtToken: null
    }
}

export default reduce(initialState, {
    [actionTypes.LOGIN_SUCCESS]: loginSuccess,
    [actionTypes.LOGIN_ERROR]: loginError,
    [actionTypes.LOGOUT_SUCCESS]: logout
});