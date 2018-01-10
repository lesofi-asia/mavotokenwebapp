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