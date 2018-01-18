import * as actionTypes from './actionTypes';

export const openDialog=()=>{
    return { type: actionTypes.DIALOG_SESSION_OPEN };
}

export const closeDialog=()=>{
    return { type: actionTypes.DIALOG_SESSION_CLOSE };
}