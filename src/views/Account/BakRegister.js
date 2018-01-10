import React, {Component} from 'react';
import {Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import ThankYou from './ThankYou';

const SubView = ({match}) => {
  const name = match.params.name;
  console.log(`SubView ${name}`)
  if (name==='thankYou') {
     return <ThankYou />
  }

  return <CreateAccount />;
}

const Register = ({match})=>{
  console.log(match)  
  return (
     <Router>
      <div className='container'>
          <Switch>
             <Route exact={true} path={`${match.path}/:name`} component={SubView} />
             <Route component={CreateAccount} />
          </Switch>
      </div>
     </Router>   
  )
}

export default Register;
