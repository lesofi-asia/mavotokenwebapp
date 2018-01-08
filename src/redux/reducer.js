import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import login from '../redux/login/reducer';

export default combineReducers({form,login});