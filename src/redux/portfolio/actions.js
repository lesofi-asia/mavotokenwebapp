import * as actionTypes from './actionTypes';

export const mvTokenSelected=(type,row)=>{
    return { type: actionTypes.PORTFOLIO_TOKEN_SELECTED, tranType: type, mvToken: row};
}