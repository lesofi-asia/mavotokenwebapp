import React, { Component } from 'react';
import { getTranslate } from 'react-localize-redux';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import textFieldStyles from '../Styles/textFieldStyles';
import * as actions from '../../redux/login/actions';
import * as topnavActions from '../../redux/topNav/actions';

class Login extends Component {
    state = {
      email: null,
      emailError: null,
      password: null,
      passwordError: null,
      signupRedirect: false
    }
    
    componentDidMount(){
        this.props.topnavUpdate()
    }
    componentWillMount(){
    }

    handleEmailChange(event){
        const value = event.target.value;
        if (value &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
          ) {
             this.setState({emailError: this.props.translate('invalidEmailAddress')})
        }else {
            this.setState({email: value, emailError: null});
        }
    }

    handlePasswordChange(event){
        const value = event.target.value;
        if (value){
            if (value.length < 6){
                this.setState({passwordError: this.props.translate('passwordIsTooShort')})
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
            this.setState({emailError: this.props.translate('emailIsRequired')})
          }
          if (!passwordError && !password){
            this.setState({passwordError: this.props.translate('passwordIsRequired')})
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
        const { from } = this.props.location.state || { from: { pathname: '/prototype/profile' } }
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
                        <h2>{this.props.translate('signInYourAccount')}</h2>
                    </div>
                </div>    
                {this.renderError()}

                <div className='row'>
                    <div className='col-sm'>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <TextField
                                    name="email"
                                    label={this.props.translate('emailAddress')}
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
                                    label={this.props.translate('password')}
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
                                {this.props.translate('login')}
                            </button> 
                        </div> 
                        </div>
                    </div>   
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <div className="d-flex p-2">----------{this.props.translate('dontHaveAccount')}---------</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <button type="button" className="btn btn-secondary btn-sm" 
                                 onClick={this.signUpOnClick.bind(this)}>{this.props.translate('signup')}</button>
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
        login: state.login,
        translate: getTranslate(state.locale)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      accountLogin: (email,password) => {
         dispatch(actions.login(email,password))  
      },
      topnavUpdate: () => {
        dispatch(topnavActions.topnavUpdate())
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)