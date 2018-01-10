import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Redirect } from 'react-router-dom';
import * as actions from '../../redux/login/actions';

class RegisterThankYou extends Component {
    componentDidMount(){
        if (this.props.login.accountCreated){
            this.props.completingAccountCreation();
        }
    }

    render() {
        return (
            <div className="container">
                <br />
                <blockquote className="blockquote text-center">
                    <h1 className="display-4">Thank you</h1>
                    <p className="mb-0">Please activate your account via the verification email that we have sent.</p>
                    <footer className="blockquote-footer">Team at <cite title="Source Title">MAVO TOKEN</cite></footer>
                </blockquote>
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
        completingAccountCreation: () => {
         dispatch(actions.completingAccountCreation())  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterThankYou);