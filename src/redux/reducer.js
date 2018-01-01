import { combineReducers } from 'redux';
import imgCate from '../redux/imgCate/imgCateReducer';
import { reducer as form } from 'redux-form';
import dialogIframe from '../redux/dialogIframe/dialogIframeReducer';
import projApollo from '../redux/projApollo/reducer';

export default combineReducers({form,imgCate,dialogIframe,projApollo});