import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import * as actions from '../../redux/login/actions';
import Default from '../../views/Default';
import News from '../../views/News';
import Register from '../../views/Account/Register';
import RegisterThankYou from '../../views/Account/RegisterThankYou';
import Login from '../../views/Account/Login';
import Profile from '../../views/Private/Profile';
import Portfolio from '../../views/Private/Portfolio';

const PrivateRoute = ({component: Component, authed, ...rest}) => {  
    return (    
         <Route {...rest} render={(props) => authed === true 
           ? <Component {...props} /> 
           : <Redirect to={{pathname: '/prototype/login', state: {from: props.location }}} />} />  
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
                            <Route exact={true} path="/prototype/login" name="Login" component={Login}/> 
                            <Route exact={true} path="/prototype/register" name="Register" component={Register}/>
                            <Route exact={true} path="/prototype/registerThankYou" name="Register Thank you" component={RegisterThankYou}/>
                            <Route exact={true} path="/prototype/news" name="News" component={News}/>
                            <PrivateRoute authed={isLoggedIn(props)} exact={true} path='/prototype/profile' component = {Profile} />
                            <PrivateRoute authed={isLoggedIn(props)} exact={true} path='/prototype/portfolio' component = {Portfolio} />
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