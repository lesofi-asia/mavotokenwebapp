import * as actionTypes from './actionTypes';

export const createAccount=(firstName,lastName,email,password)=>{
    let accountLogin={};
    accountLogin.firstName=firstName;
    accountLogin.lastName=lastName;
    accountLogin.email=email;
    accountLogin.password=password;

    return { type: actionTypes.ACCOUNT_CREATION_SUCCESS, accountLogin };
}

export const completingAccountCreation=()=>{
    return { type: actionTypes.ACCOUNT_CREATION_COMPLETED };
}

export const login=(email,password)=>{
    let profile={};
    profile.firstName='James';
    profile.lastName='Koh';
    profile.email=email;

    let jwtToken=Math.random().toString(36);
    console.log(`profile: ${JSON.stringify(profile)} jwtToken: ${jwtToken} `)
    return { type: actionTypes.LOGIN_SUCCESS, profile, jwtToken };
}

export const logout=()=> {
    return { type: actionTypes.LOGOUT_SUCCESS };
}