import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/projApollo/actions';

const SubmittedForm = props => {
    const { projApollo } = props;
    
    if (projApollo.invoiceSubmitted) {
        props.invoiceSubmissionCompleted();
    }
    
    return (
        <div className="container">
            <div className="row">
                <h3>Invoice Data Extraction</h3>
            </div>
            <div className="row">
                <div className="alert alert-success" role="alert">
                     Your task has been submitted successfully.
                </div>
            </div>    
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        projApollo: state.projApollo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      invoiceSubmissionCompleted: () => {
         dispatch(actions.invoiceSubmissionCompleted())  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubmittedForm);