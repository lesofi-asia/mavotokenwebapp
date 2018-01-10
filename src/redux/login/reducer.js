import * as actionTypes from './actionTypes';
import reduce from '../reduce';

const initialState = {
    profile: null,
    jwtToken: null,
    error: null,
    accountCreated: false,
    routeLocation: null,
    emailVerify: false,
    emailVerifyError: null,
    emailVerifyDone: false,
    accountLogins: []//For prototype development
}

const accouuntCreationSuccess=(state, action)=>{
    let accountLogins = state.accountLogins;
    accountLogins.push(action.accountLogin);
    return {
        ...state,
        accountCreated: true,
        error: null,
        accountLogins: accountLogins
    }
}

const accountCreationCompleted=(state)=>{
    return {
        ...state,
        accountCreated: false
    }
}

const accountCreationError=(state,action)=>{
    return {
        ...state,
        error: action.error
    }
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
    [actionTypes.ACCOUNT_CREATION_SUCCESS]: accouuntCreationSuccess,
    [actionTypes.ACCOUNT_CREATION_COMPLETED]: accountCreationCompleted,
    [actionTypes.ACCOUNT_CREATION_ERROR]: accountCreationError,
    [actionTypes.LOGIN_SUCCESS]: loginSuccess,
    [actionTypes.LOGIN_ERROR]: loginError,
    [actionTypes.LOGOUT_SUCCESS]: logout
});