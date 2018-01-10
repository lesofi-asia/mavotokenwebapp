import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import CustomCheckboxField from '../../components/MaterialUi/CustomCheckboxField';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import textFieldStyles from '../Styles/textFieldStyles';
import * as actions from '../../redux/login/actions';

const checkboxLabel = (
  <span>&nbsp;I have read and agree to the&nbsp;
    <a
      href={'https://www.mavotoken.com/'}
      target="_blank"
    >
      Terms and Conditions
    </a>
    &nbsp;and&nbsp; 
    <a
      href="https://www.mavotoken.com/"
      target="_blank"
    >
      Privacy Policy
    </a>
    .
  </span>
)

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: null,
            firstNameError: null,
            lastName: null,
            lastNameError: null,
            email: null,
            emailError: null,
            password: null,
            passwordError: null,
            confirmPassword: null,
            confirmPasswordError: null,
            checkBoxTnC: false
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleCreateAccountSubmit = this.handleCreateAccountSubmit.bind(this);
    }

    handleFirstNameChange(e){
        const value = e.target.value;
        if (value) {
            this.setState({firstName: value, firstNameError: null});
        }else {
            this.setState({firstNameError: 'First Name is required!'})
        }
    }

    handleLastNameChange(e){
        const value = e.target.value;
        if (value) {
            this.setState({lastName: value, lastNameError: null});
        }else {
            this.setState({lastNameError: 'Last Name is required!'})
        }
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
    handleConfirmPasswordChange(event){
        const value = event.target.value;
        if (value){
            if (!(value===this.state.password)){
                this.setState({confirmPasswordError: 'Password does not match!'})
            }else {
                this.setState({confirmPassword: value, confirmPasswordError: null});
            }
        }
    }

    handleCreateAccountSubmit(){
        console.log('handleCreateAccountSubmit')
        const { firstName, lastName, email, password, confirmPassword} = this.state;

        this.props.createAccount(firstName,lastName,email,password);
    }

    renderSubmitButton = () => {
        const { firstName, firstNameError, lastName, lastNameError, email, emailError, password, 
            passwordError, confirmPassword, confirmPasswordError, checkBoxTnC} = this.state;
        let isValid=true;
        if ( firstNameError || lastNameError || emailError || passwordError || confirmPasswordError){
            isValid=false;
        }
        if (checkBoxTnC && isValid && firstName && lastName && email && password && confirmPassword) {
            return (
                <button className="btn btn-primary btn-lg" type="submit" onClick={this.handleCreateAccountSubmit}>
                    Create Account
                </button> 
            )
        }else {
            return (
                <button className="btn btn-secondary btn-lg disabled" type="submit">
                        Create Account
                </button> 
            )
        }
    }

    displayError = login => {
        if (login.error){
            return (
                <div className="alert alert-danger" role="alert">
                 {login.error}
                </div>
            )
        }
    }

    checkBoxTnCOnClick=(e)=>{
        this.setState({checkBoxTnC: e.target.checked});
    }

    render(){
        if (this.props.login.accountCreated){
            return <Redirect to="/registerThankYou"/>;
        }
        return (
            <div className="container">
                <ToolbarTitle text="Create Your Account" /> 
                {this.displayError(this.props.login)}
                
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <TextField
                            name="firstName"
                            hintText="First Name"
                            floatingLabelText="First Name"
                            floatingLabelStyle={textFieldStyles.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                            underlineStyle={textFieldStyles.underlineStyle}
                            onChange={this.handleFirstNameChange}
                            errorText={this.state.firstNameError}
                        />
                    </div>
                </div>

                <div className="d-flex flex-row">
                    <div className="p-2">
                        <TextField
                            name="lastName"
                            hintText="Last Name"
                            floatingLabelText="Last Name"
                            floatingLabelStyle={textFieldStyles.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                            underlineStyle={textFieldStyles.underlineStyle}
                            onChange={this.handleLastNameChange}
                            errorText={this.state.lastNameError}
                        />
                    </div>
                </div>

                <div className="d-flex flex-row">
                    <div className="p-2">
                        <TextField
                            name="email"
                            hintText="Email Address"
                            floatingLabelText="Email Address"
                            floatingLabelStyle={textFieldStyles.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                            underlineStyle={textFieldStyles.underlineStyle}
                            onChange={this.handleEmailChange}
                            errorText={this.state.emailError}
                        />
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="p-2">
                       <TextField
                            name="password"
                            type="password"
                            hintText="Password"
                            floatingLabelText="Password"
                            floatingLabelStyle={textFieldStyles.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                            underlineStyle={textFieldStyles.underlineStyle}
                            onChange={this.handlePasswordChange}
                            errorText={this.state.passwordError}
                        />
                    </div>
                </div>  
                <div className="d-flex flex-row">
                    <div className="p-2">
                       <TextField
                            name="confirmPassword"
                            type="password"
                            hintText="Confirm Password"
                            floatingLabelText="Confirm Password"
                            floatingLabelStyle={textFieldStyles.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                            underlineStyle={textFieldStyles.underlineStyle}
                            onChange={this.handleConfirmPasswordChange}
                            errorText={this.state.confirmPasswordError}
                        />
                    </div>
                </div>    
                
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <input type="checkbox" onClick={(e)=> this.checkBoxTnCOnClick(e)}  />
                        {checkboxLabel}
                     </div>
                </div>  
                 
                <div className="d-flex flex-row">
                   <div className="p-2">
                        {this.renderSubmitButton()}
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
      createAccount: (firstName,lastName,email,password) => {
         dispatch(actions.createAccount(firstName,lastName,email,password))  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)