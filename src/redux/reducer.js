import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { localeReducer as locale } from 'react-localize-redux';
import login from '../redux/login/reducer';
import dialogSession from '../redux/dialogSession/reducer';
import portfolio from '../redux/portfolio/reducer';
import topNav from '../redux/topNav/reducer';

export default combineReducers({form,locale,login,dialogSession,portfolio,topNav});