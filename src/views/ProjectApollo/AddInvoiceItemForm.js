import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import renderTextField from '../../components/MaterialUi/renderTextField';
import RFSelectField from '../../components/ReduxFormComps/RFSelectField';
import RFCheckboxField from '../../components/ReduxFormComps/RFCheckboxField';
import * as actions from '../../redux/projApollo/actions';
import { isValidDate } from '../../Utils/dateUtil';  
import { checkboxLabel,checkboxCustomStyle,checkboxCustomLabelStyle } from './CheckboxUtil';

const styles = {
    textFieldStyle: {
        width: '310px'
    } 
}

const cancelButtonOnClick=(e,props)=>{
    e.preventDefault();
    props.cancelAddInvItemForm();
}

const renderColLChargeDesc=props=>{
    const { isOverrideColLChargeDesc, projApollo } = props;
    if (isOverrideColLChargeDesc) {
        return (
            <Field
                name="colLChargeDesc"
                component={renderTextField}
                label="Column L Charge Description"
                style={styles.textFieldStyle}
            />
        )
    }else {
        return (
            <Field
                label="Column L Charge Description"
                name="colLChargeDesc"
                datas={projApollo.invItemChargeDescs}
                component={RFSelectField}
                codeField={'code'}
                descField={'desc'}
                customStyle={{width: '340px' }}
            />
        )
    }
}

const AddInvoiceItemForm = props => {
    const { handleSubmit,pristine,submitting, isOverrideColLChargeDesc, initialValues } = props;

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="row">
                   <div className="col-sm-3">
                    <h5>Extract Invoice Items</h5>
                   </div> 
                   <div className="col-sm-3">
                        <button className="btn btn-outline-primary" type="submit" disabled={pristine || submitting}>
                        Save
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-outline-secondary" type="button" onClick={(e)=>cancelButtonOnClick(e,props)}>
                            Cancel
                        </button>
                   </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Field
                            name="colHHdrAcctNo"
                            component={renderTextField}
                            label="Column H Header Account Number"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                        <Field
                            name="colIHdrTotal"
                            component={renderTextField}
                            label="Column I Header Total"
                            type="number"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                        <Field
                            name="colJHdrConsump"
                            component={renderTextField}
                            label="Column J Header Consumption"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                        <Field
                            name="colKHdrConsumpUnits"
                            component={renderTextField}
                            label="Column K Header Consumption Units"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                        { renderColLChargeDesc(props) }
                        <Field name="isOverrideColLChargeDesc" 
                        component={RFCheckboxField} 
                        label={checkboxLabel(isOverrideColLChargeDesc,'Column L')}
                        customStyle={checkboxCustomStyle}
                        customLabelStyle={checkboxCustomLabelStyle(isOverrideColLChargeDesc)}
                        />
                    </div>
                    <div className="col-sm">
                        <Field
                            name="colMCharge"
                            component={renderTextField}
                            label="Column M Charge"
                            type="number"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                        <Field
                            name="colNConsump"
                            component={renderTextField}
                            label="Column N Consumption"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                       <Field
                            name="colOConsumpUnit"
                            component={renderTextField}
                            label="Column O Consumption Units"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                       <Field
                            name="colPServiceAddress"
                            component={renderTextField}
                            label="Column P Service Address"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                       <Field
                            name="colQBillingStartDate"
                            component={renderTextField}
                            label="Column Q Billing Start Date"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                       <Field
                            name="colRBillingEndDate"
                            component={renderTextField}
                            label="Column R Billing End Date"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                       <Field
                            name="colSPartialFinal"
                            component={renderTextField}
                            label="Column S Partial/Final"
                            style={styles.textFieldStyle}
                        />
                    </div>
                    <div className="col-sm">
                       <Field
                            name="colTDaysOfService"
                            component={renderTextField}
                            label="Column T Days of Service"
                            style={styles.textFieldStyle}
                        />
                    </div>
                </div> 
                <div className="row">
                    &nbsp;&nbsp;
                </div>
            </form>
        </div>    
    )
}

const validate = values => {
    const errors = {};
    
    if (values.colQBillingStartDate && !isValidDate(values.colQBillingStartDate)){
        errors.colQBillingStartDate = 'Invalid date format for this pattern mm/dd/yyyy'
    }
    if (values.colRBillingEndDate && !isValidDate(values.colRBillingEndDate)){
        errors.colRBillingEndDate = 'Invalid date format for this pattern mm/dd/yyyy'
    }
    return errors;
}

const submit = (values, dispatch, props) => {
    let newInvItem=values;
    newInvItem.id=props.projApollo.invoiceItems.length - 1;
    if (props.projApollo.invoiceItemSelectedIndex!==null){//Update
        props.updateEditInvoiceItem(newInvItem);
    }else {//Add New
        props.addNewInvoiceItem(newInvItem);
    }
}

const AddInvItemReduxForm = reduxForm({
    form: 'addInvItemForm',
    enableReinitialize: true,
    validate,
    onSubmit: submit,
})(AddInvoiceItemForm)

const selector = formValueSelector('addInvItemForm')

const mapStateToProps = (state, ownProps) => {
    return {
        projApollo: state.projApollo,
        isOverrideColLChargeDesc: selector(state, 'isOverrideColLChargeDesc'),
        initialValues: state.projApollo.invoiceItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      cancelAddInvItemForm: () => {
            dispatch(actions.cancelAddInvItemForm())  
      },
      addNewInvoiceItem: (newInvoiceItem) => {
        dispatch(actions.addNewInvoiceItem(newInvoiceItem))  
      },
      updateEditInvoiceItem: (newInvoiceItem) => {
        dispatch(actions.updateEditInvoiceItem(newInvoiceItem))  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddInvItemReduxForm);