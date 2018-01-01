import * as actionTypes from './actionTypes';
import { submitTaskApi } from '../../apiUtils/api';

export const updateAnswer=(imgCateForm)=>{
    let updateImgCateForm=imgCateForm;

    if (updateImgCateForm.hasNone) {
        updateImgCateForm.hasPeople=false;
        updateImgCateForm.hasVehicle=false;
    }

    return { type: actionTypes.IMGCATE_UPDATE_ANSWER,imgCateForm: updateImgCateForm};
}

export const openLightBox=()=>{
    return { type: actionTypes.IMGCATE_OPEN_LIGHTBOX };
}

export const closeLightBox=()=>{
    return { type: actionTypes.IMGCATE_CLOSE_LIGHTBOX };
}

export const submitResult=(jwt,imgCateForm,taskAcceptedInfoId)=>{
    let answer='';
    if (imgCateForm.hasPeople) {
        answer+='People';
    }
    if (imgCateForm.hasVehicle) {
        answer+=imgCateForm.hasPeople?',Vehicle':'Vehicle';
    }
    if (imgCateForm.hasNone) {
        answer+='None of Above';
    }

    let payload={};
    payload.answer=answer;
    payload.taskAcceptedInfoId=taskAcceptedInfoId;

    return dispatch => submitTaskApi(jwt,payload).then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch({type: actionTypes.IMGCATE_SUBMIT_ERROR,error: data.error});
        }else {
            dispatch({type: actionTypes.IMGCATE_SUBMIT_SUCCESS, answer: answer });
        }
    }).catch((err)=>{
        console.log(err);
        dispatch({type: actionTypes.IMGCATE_SUBMIT_ERROR, error: err});
    })
}

export const submitCompleted=()=>{
    return { type: actionTypes.IMGCATE_SUBMIT_COMPLETED };
}