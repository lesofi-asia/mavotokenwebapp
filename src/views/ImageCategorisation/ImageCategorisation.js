import React from 'react';
import queryString from 'query-string';
import Lightbox from 'react-images';
import {ToolbarTitle} from 'material-ui/Toolbar';
import { Field,reduxForm,formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import renderCheckbox from '../../components/MaterialUi/renderCheckbox';
import * as actions from '../../redux/imgCate/actions';

const closeLightbox=(props)=>{
    props.closeLightBox();
}

const imageBoxOnClick=(props)=>{
    props.openLightBox();
}

const renderSubmitButton = (hasPeople,hasVehicle,hasNone,pristine,submitting) => {
    if (hasPeople||hasVehicle||hasNone){
        return (
            <div className="d-flex flex-row"> 
                <div className="p-2">
                    <button className="btn btn-outline-primary" type="submit" disabled={submitting}>
                    Submit Your Answer
                    </button>
                </div>
            </div>
        );
    }
}  

const peopleOnChange = (e,props,hasVehicle) => {
    let imgCateForm={};
    imgCateForm.hasPeople=e.target.checked;
    imgCateForm.hasVehicle=hasVehicle;
    
    props.updateAnswer(imgCateForm);
}

const vehicleOnChange = (e,props,hasPeople) => {
    let imgCateForm={};
    imgCateForm.hasPeople=hasPeople;
    imgCateForm.hasVehicle=e.target.checked;
    
    props.updateAnswer(imgCateForm);
}

const noOfAboveOnChange = (e,props,hasPeople,hasVehicle) => {
    let imgCateForm={};
    imgCateForm.hasNone=e.target.checked;
    if (!e.target.checked && hasPeople) {
        imgCateForm.hasPeople=hasPeople
    }
    if (!e.target.checked && hasVehicle) {
        imgCateForm.hasVehicle=hasVehicle
    }
    props.updateAnswer(imgCateForm);
}

const encodeImageUrl=(imgUrl,imgId)=>{
    let arrImgUrl=imgUrl.split('/');
    arrImgUrl.splice(arrImgUrl.length - 1, 1);//Remove last element
    let newImgUrl=arrImgUrl.join('/');
    let encodeImgId=imgId;
    encodeImgId=decodeURIComponent(imgId);
    encodeImgId=encodeURIComponent(imgId);

    newImgUrl=`${newImgUrl}/${encodeImgId}`;
    return newImgUrl;
}

export const ImageCategorisation = props => {
    const { location,handleSubmit,hasPeople,hasVehicle,hasNone,pristine,submitting,initialValues,imgCate } = props;
    const query = queryString.parse(location.search);
    
    if (imgCate.submitted) {
        return <Redirect to="/imgCateThankYou"/>;
    }

    if (!query.jwt || !query.imgUrl || !query.taskAcceptedInfoId) {
        return (
            <div className="animated fadeIn">
               <div className="ImageCategorisation"> 
                <ToolbarTitle text="Image Categorisation " />    
                <div className="alert alert-danger">
                    <strong>ERROR!</strong> Missing parameters!
                </div>     
               </div>        
            </div>
        )
    }

    const imgUrl=encodeImageUrl(query.imgUrl,query.imgId);

    return (
        <div className="animated fadeIn">
            <div className="ImageCategorisation">
                <ToolbarTitle text="Image Categorisation " />    
                <div className="ImageBox">
                    <img src={imgUrl} onClick={()=>imageBoxOnClick(props)}  />
                </div>
                <Lightbox
                    images={[{ src: imgUrl }]}
                    onClose={()=>closeLightbox(props)}
                    isOpen={imgCate.openLightbox}
                />
                
                <h3 className="display-7">Is there at least 1 person / vehicle in the image above?</h3>
                <form onSubmit={handleSubmit} >
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <Field name="hasPeople" 
                            component={renderCheckbox} 
                            onChange={(e)=> peopleOnChange(e,props,hasVehicle)}
                            label="People" />
                        </div> 
                    </div>
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <Field name="hasVehicle" 
                            component={renderCheckbox} 
                            onChange={(e)=> vehicleOnChange(e,props,hasPeople)}
                            label="Vehicle" />
                        </div> 
                    </div>
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <Field name="hasNone" 
                            component={renderCheckbox} 
                            label="None of Above" 
                            onChange={(e)=> noOfAboveOnChange(e,props,hasPeople,hasVehicle)} />
                        </div> 
                    </div>
                    {renderSubmitButton(hasPeople,hasVehicle,hasNone,pristine,submitting)}
                </form>
            </div>
        </div>
    )
}

const submit = (values, dispatch, props) => {
    const query = queryString.parse(props.location.search);
    const jwt = query.jwt;
    const taskAcceptedInfoId = query.taskAcceptedInfoId;

    props.submitResult(jwt,values,taskAcceptedInfoId);
}

const imgCateReduxForm = reduxForm({
    form: 'imgCateForm', // a unique identifier for this form
    enableReinitialize: true,
    onSubmit: submit
})(ImageCategorisation)

const selector = formValueSelector('imgCateForm')

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.imgCate.imgCateForm,
        hasPeople: selector(state, 'hasPeople'),
        hasVehicle: selector(state, 'hasVehicle'),
        hasNone: selector(state, 'hasNone'),
        imgCate: state.imgCate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      updateAnswer: (imgCateForm) => {
        dispatch(actions.updateAnswer(imgCateForm))  
      },
      openLightBox: () => {
        dispatch(actions.openLightBox())  
      },
      closeLightBox: () => {
        dispatch(actions.closeLightBox())  
      },
      submitResult: (jwt,imgCateForm,taskAcceptedInfoId) => {
        dispatch(actions.submitResult(jwt,imgCateForm,taskAcceptedInfoId))  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(imgCateReduxForm)