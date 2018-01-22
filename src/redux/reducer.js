import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import login from '../redux/login/reducer';
import dialogSession from '../redux/dialogSession/reducer';
import portfolio from '../redux/portfolio/reducer';
import topNav from '../redux/topNav/reducer';

export default combineReducers({form,login,dialogSession,portfolio,topNav});