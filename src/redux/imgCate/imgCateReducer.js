import * as actionTypes from './actionTypes';
import reduce from '../reduce';

const initialState = {
    imgCateForm: null,
    error: null,
    submitted: false,
    openLightbox: false,
    answer: ''
}

const updateAnswer = (state, action) => {
    return {
        ...state,
        imgCateForm: action.imgCateForm
    }
}

const submitError = (state, action)=>{
    return {
        ...state,
        error: action.error
    }
}

const submitSuccess = (state,action)=> {
    return {
        ...state,
        submitted: true,
        error: null,
        answer: action.answer
    }
}

const submitCompleted = (state) =>{
    return {
        ...state,
        submitted: false,
        imgCateForm: null
    }
}

const openLightbox=(state)=>{
    return {
        ...state,
        openLightbox: true
    }
}

const closeLightbox=(state)=>{
    return {
        ...state,
        openLightbox: false
    }
}

export default reduce(initialState,{
    [actionTypes.IMGCATE_UPDATE_ANSWER]: updateAnswer,
    [actionTypes.IMGCATE_OPEN_LIGHTBOX]: openLightbox,
    [actionTypes.IMGCATE_CLOSE_LIGHTBOX]: closeLightbox,
    [actionTypes.IMGCATE_SUBMIT_ERROR]: submitError,
    [actionTypes.IMGCATE_SUBMIT_SUCCESS]: submitSuccess,
    [actionTypes.IMGCATE_SUBMIT_COMPLETED]: submitCompleted
});