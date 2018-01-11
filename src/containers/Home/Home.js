import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import Default from '../../views/Default';
import Page1 from '../../views/Page1';

import * as actions from '../../redux/login/actions';
import Register from '../../views/Account/Register';
import RegisterThankYou from '../../views/Account/RegisterThankYou';
import Login from '../../views/Account/Login';
import Profile from '../../views/Private/Profile';

const PrivateRoute = ({component: Component, authed, ...rest}) => {  
    return (    
         <Route {...rest} render={(props) => authed === true 
           ? <Component {...props} /> 
           : <Redirect to={{pathname: '/login', state: {from: props.location }}} />} />  
    )
}

const isLoggedIn = props => {
    const { login } = props;
    if (login.jwtToken){
      return true;
    } else {
      return false;
    }
}

const Home=props=>{
    return (
        <Router>
            <div className="app">
                <Header logout={props.logout} profile={props.login.profile} /> 
                <div className="app-body">
                    <main className="main">
                      <Container>
                        <Switch>
                            <Route path="/login" name="Login" component={Login}/> 
                            <Route path="/register" name="Register" component={Register}/>
                            <Route path="/registerThankYou" name="Register Thank you" component={RegisterThankYou}/>
                            <Route path="/page1" name="Page 1" component={Page1}/>
                            <PrivateRoute authed={isLoggedIn(props)} path='/profile' component = {Profile} />
                            <Route path="/" name="Default" component={Default}/>
                            <Route render={() => (
                                <div className='container'>
                                <div className='row'>
                                    <h3>Are we lost or what?</h3>
                                </div> 
                                </div>
                            )}/>
                        </Switch>    
                      </Container>
                    </main>
                </div>
                <Footer />
            </div> 
        </Router>    
    )
}

const mapStateToProps = (state) => {
    return state;
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            dispatch(actions.logout())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);