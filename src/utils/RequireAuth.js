import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as loginActions from '../redux/loginSession/actions';

const RequireAuth=props=>{
    const { login, location } = props;
    
    if (location ){
        props.setRouteLocation(location);
    }
    
    if (!login.jwtToken){
        return <Redirect to="/signin"/>;
    }else {
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      login: state.login
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setRouteLocation: (routeLocation) => {
            dispatch(loginActions.setRouteLocation(routeLocation))  
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RequireAuth);