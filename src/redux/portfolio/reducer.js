import * as actionTypes from './actionTypes';
import reduce from '../reduce';

const initialState = {
    tranType: '',
    mvToken: null
}

const mvTokenSelected = (state,action)=>{
    return {
        ...state,
        tranType: action.tranType,
        mvToken: action.mvToken
    }
}

export default reduce(initialState,{
  [actionTypes.PORTFOLIO_TOKEN_SELECTED]: mvTokenSelected
});