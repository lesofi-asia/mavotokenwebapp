import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Signup from '../../views/Signup';
import Register from '../../views/Register';

import Dashboard from '../../views/Dashboard/';
//import Agreement from '../../views/Agreement';
import DocUpload from '../../views/Register/DocUpload';

import * as actions from '../../redux/loginSession/actions';

class Full extends Component {  
  
  render() {
    //if (!this.props.gs.googleUser){
    //   return <Redirect to="/login" />
    //} 

    return (
      <div className="app">
        <Header profile={this.props.login.profile} logout={this.props.logout} />
        <div className="app-body">
        { /* <Sidebar {...this.props}/> */}
          <main className="main">
    {/* <Breadcrumb /> */}
            <Container fluid>
                <Switch>
                  <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                  {/*
                  <Route path="/register" name="Register" component={Register}/>
                  */
                  }
                  <Route path="/investorSignup" name="Investor Signup" component={Register}/>  
                  { /* <Route path="/agreement" name="Agreement" component={Agreement}/> */}
                  <Route path="/signup" name="Sign up" component={Signup}/>

                  <Route path="/docUpload" name="Document Upload" component={DocUpload}/>

                  <Redirect from="/register" to="/signup"/>
                  <Redirect from="/" to="/register"/>
                </Switch>
            </Container>
          </main>
    { /* <Aside /> */}
        </div>
        <Footer />
      </div>
    );
  }
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

Full = connect(
  mapStateToProps,
  mapDispatchToProps
)(Full)

export default Full;
