import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AuthenticatedRedirect=props=>{
    const { login } = props;
    
    if (login.jwtToken){
        const {pathname} = login.routeLocation; 
        return pathname?<Redirect to={pathname}/>:null;
    } else {
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      login: state.login
    }
}

export default connect(mapStateToProps)(AuthenticatedRedirect);