import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import textFieldStyles from '../Styles/textFieldStyles';
import * as actions from '../../redux/login/actions';

class Login extends Component {
    state = {
      email: null,
      emailError: null,
      password: null,
      passwordError: null,
      signupRedirect: false
    }
    
    componentWillMount(){
    }

    handleEmailChange(event){
        const value = event.target.value;
        if (value &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
          ) {
             this.setState({emailError: 'Invalid email address'})
        }else {
            this.setState({email: value, emailError: null});
        }
    }

    handlePasswordChange(event){
        const value = event.target.value;
        if (value){
            if (value.length < 6){
                this.setState({passwordError: 'Password is too short!'})
            }else {
                this.setState({password: value, passwordError: null});
            }
        }
    }
   
    handleLoginSubmit(){
        const { email, password, emailError, passwordError } = this.state;
        if (!emailError && !passwordError && email && password){
           this.props.accountLogin(email,password);
          // this.setState({email: email, password: password});
        } else {
          if (!emailError && !email){
            this.setState({emailError: 'Email is required!'})
          }
          if (!passwordError && !password){
            this.setState({passwordError: 'Password is required!'})
          }
        }
    }

    signUpOnClick(){
      this.setState({signupRedirect: true});
    }

    renderError=()=>{
      //console.log(this.props.login)
      const {error} = this.props.login;
      //console.log(error)
      if (error){
        return (
          <div className='row'>  
              <div className='col-sm'>
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
              </div>
          </div>
        )
      }
    }

    render(){
        const { from } = this.props.location.state || { from: { pathname: '/profile' } }
        const { login } = this.props;
        
        if (this.state.signupRedirect){
            return <Redirect to="/prototype/register"/>;
        }
        console.log(`login: ${login}`)
        if (login.jwtToken){
           console.log(`login from: ${from}`)
           return (
             <Redirect to={from} />
           )
        }

        return (
            <div className="container">
                <div className='row'>
                    <br />
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <h2>Sign In Your Account</h2>
                    </div>
                </div>    
                {this.renderError()}

                <div className='row'>
                    <div className='col-sm'>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <TextField
                                    name="email"
                                    label="Email Address"
                                    onChange={this.handleEmailChange.bind(this)}
                                    error={this.state.emailError?true:false}
                                    helperText={this.state.emailError}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>    
                    <div className='col-sm'>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                            <TextField
                                    name="password"
                                    type="password"
                                    label="Password"
                                    onChange={this.handlePasswordChange.bind(this)}
                                    error={this.state.passwordError?true:false}
                                    helperText={this.state.passwordError}
                                />
                            </div>
                        </div>  
                    </div>
                </div>   

                <div className='row'>
                    <div className='col-sm'>
                        <div className="d-flex flex-row">
                        <div className="p-2">
                            <button className="btn btn-primary btn-lg" type="submit" 
                                onClick={this.handleLoginSubmit.bind(this)}>
                                Login
                            </button> 
                        </div> 
                        </div>
                    </div>   
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <div className="d-flex p-2">----------Don't Have Account?---------</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <button type="button" className="btn btn-secondary btn-sm" onClick={this.signUpOnClick.bind(this)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
               </div>      
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      accountLogin: (email,password) => {
         dispatch(actions.login(email,password))  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)