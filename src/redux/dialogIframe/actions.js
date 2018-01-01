import * as actionTypes from './actionTypes';

export const openDialog=()=>{
    return { type: actionTypes.DIALOGIFRAME_OPEN };
}

export const closeDialog=()=>{
    return { type: actionTypes.DIALOGIFRAME_CLOSE };
}