import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import Default from '../../views/Default';
import Page1 from '../../views/Page1';

import Register from '../../views/Account/Register';
import RegisterThankYou from '../../views/Account/RegisterThankYou';

const PrivateRoute = ({component: Component, authed, ...rest}) => {  
    return (    
         <Route {...rest} render={(props) => authed === true 
           ? <Component {...props} /> 
           : <Redirect to={{pathname: '/signin', state: {from: props.location }}} />} />  
    )
}

const Home=()=>{
    return (
        <Router>
            <div className="app">
                <Header /> 
                <div className="app-body">
                    <main className="main">
                      <Container>
                        <Switch>
                            <Route path="/register" name="Register" component={Register}/>
                            <Route path="/registerThankYou" name="Register Thank you" component={RegisterThankYou}/>
                            <Route path="/page1" name="Page 1" component={Page1}/>
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

export default Home;