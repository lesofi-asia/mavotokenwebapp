import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field,reduxForm,formValueSelector } from 'redux-form';
import renderTextField from '../../components/MaterialUi/renderTextField';
import renderCheckbox from '../../components/MaterialUi/renderCheckbox';
import reduxSelectField from '../../components/MaterialUi/reduxSelectField';
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

const dataSourceConfig = {
    text: 'display',
    value: 'code',
};

const renderSubmitButton=props=>{
    const { pristine,submitting,projApollo,isPdfIssue,invalid } = props;

    if (isPdfIssue){
        return <button type="submit" className="btn btn-primary btn-lg" disabled={pristine || submitting} >Submit As Invalid Invoice</button>; 
    }else {
        if (projApollo.invoiceItems.length > 0 && !invalid) {
            return <button type="submit" className="btn btn-primary btn-lg" disabled={pristine || submitting} >Submit Your Answer</button>; 
        }
    }
    return null;
}

const validate = (values,props) => {
    const errors = {};
    let requiredFields = [
        'hdrVendorCode',
        'hdrMainAcctNo',
        'hdrCustCompName'
      ];

    if (!values.isPdfIssue){
        requiredFields.forEach(field => {
            if (!values[field]) {
                errors[field] = 'Required'
            }
        })

        const { projApollo,jwt } = props;
        const { validatedVendorCode, validatedAcctNo, docTemplLines, invoiceVendor, invoiceVendors} = projApollo;
        if (values['hdrVendorCode']){
            if (!invoiceVendor){
                props.selectedInvVendor(values['hdrVendorCode'],invoiceVendors);
                props.refreshAcctNos(jwt,values['hdrVendorCode']);
                props.refreshCustNames(jwt,values['hdrVendorCode']);
                props.refreshChargeDescs(jwt,values['hdrVendorCode']);
                props.clearAllInvoiceItems();
            }else {
                if (values['hdrVendorCode']!== invoiceVendor.code){
                    props.selectedInvVendor(values['hdrVendorCode'],invoiceVendors);
                }
            }
        }else {
            props.clearInvVendor();
        }
        
        if (projApollo.validatedVendorNAcctNo && projApollo.validateError){
            const { field, error,value } = projApollo.validateError;
            if (values[field]!== value ) {
                props.clearValidation();
            }
        }

        if (validatedVendorCode && validatedAcctNo && values['hdrCustCompName']){
            let search = docTemplLines.find(x=>x.inv_prop_id_val===values['hdrCustCompName']);
            if (!search){
                errors['hdrCustCompName'] = 'Invalid Customer Company Name!'
            }
        }

        if (projApollo.validateError) {
            const { field, error,value } = projApollo.validateError;
            errors[field] = error;
        }
    }  
    
    if (values.hdrInvDate && !isValidDate(values.hdrInvDate)){
        errors.hdrInvDate = 'Invalid date format for this pattern mm/dd/yyyy'
    }
    if (values.hdrPayDate && !isValidDate(values.hdrPayDate)){
        errors.hdrPayDate = 'Invalid date format for this pattern mm/dd/yyyy'
    }
    return errors;
}

const renderVendorInfo=props=>{
    const { projApollo } = props;
    const { invoiceVendor } = projApollo;

    if (invoiceVendor){
        return (
            <nav aria-label="breadcrumb" role="navigation">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><strong><small>Code:</small></strong> <u><small>{invoiceVendor.code}</small></u></li>
                    <li className="breadcrumb-item"><strong><small>Name:</small></strong> <u><small>{invoiceVendor.desc}</small></u></li>
                    <li className="breadcrumb-item"><strong><small>Type:</small></strong> <u><small>{invoiceVendor.type_of_invoice}</small></u></li>
                </ol>
            </nav>
        )
    }
}

const renderHdrMainAcctNo=props=>{
    const { isOverrideHdrMainAcctNo, projApollo } = props;
    if (isOverrideHdrMainAcctNo) {
        return (
            <Field
                name="hdrMainAcctNo"
                component={renderTextField}
                label="Label B Header Main Account Number"
                style={styles.textFieldStyle}
                />
        )
    }else {
        return (
            <Field
                label="Label B Header Main Account Number"
                name="hdrMainAcctNo"
                datas={projApollo.invoiceAcctNos}
                component={RFSelectField}
                codeField={'code'}
                descField={'desc'}
                customStyle={{width: '290px' }}
        />
       )
    }
}

const renderHdrCustCompName=props=>{
    const { isOverrideHdrCustCompName, projApollo } = props;
    if (isOverrideHdrCustCompName) {
        return (
            <Field
                name="hdrCustCompName"
                component={renderTextField}
                label="Label C Header Customer Company Name"
                style={styles.textFieldStyle}
                />
        )
    }else {
        return (
            <Field
                label="Label C Header Customer Company Name"
                name="hdrCustCompName"
                datas={projApollo.invoiceCustNames}
                component={RFSelectField}
                codeField={'code'}
                descField={'desc'}
                customStyle={{width: '320px' }}
            />
        )
    }
}

const InvoiceHeaderForm = props => {
    const { handleSubmit,pristine,submitting,projApollo,isOverrideHdrMainAcctNo,isOverrideHdrCustCompName } = props;
    
    if (!projApollo.invoiceVendorsLoaded){
        props.populateVendorsList();
    }

    if (projApollo.invoiceSubmitted) {
        return <Redirect to='/projectApollo/submittedForm' />;
    }

    return (
        <div>
          <form onSubmit={handleSubmit} > 
            <div className="row">
                <Field name="isPdfIssue" 
                component={renderCheckbox} 
                label="Invalid PDF / Missing Pages / Not load" />
            </div> 
            <div className="row">
                <Field
                    label="Label A Header Vendor Code"
                    name="hdrVendorCode"
                    dataSource={projApollo.invoiceVendors}
                    dataSourceConfig={dataSourceConfig}
                    component={reduxSelectField}
                    fullWidth={true}
                />
                {renderVendorInfo(props)}
            </div>
            <div className="row">
                { renderHdrMainAcctNo(props) }
                <Field name="isOverrideHdrMainAcctNo" 
                component={RFCheckboxField} 
                label={checkboxLabel(isOverrideHdrMainAcctNo,'Label B')}
                customStyle={checkboxCustomStyle}
                customLabelStyle={checkboxCustomLabelStyle(isOverrideHdrMainAcctNo)}
                />
            </div> 
            <div className="row">
                { renderHdrCustCompName(props) }
                <Field name="isOverrideHdrCustCompName" 
                  component={RFCheckboxField} 
                  label={checkboxLabel(isOverrideHdrCustCompName,'Label C')}
                  customStyle={checkboxCustomStyle}
                  customLabelStyle={checkboxCustomLabelStyle(isOverrideHdrCustCompName)}
                />
            </div>
            <div className="row">
                <Field
                    name="hdrMainInvNo"
                    component={renderTextField}
                    label="Label D Header Main Invoice Number"
                    style={styles.textFieldStyle}
                    />
            </div> 
            <div className="row">
                <Field
                    name="hdrMainInvTotal"
                    component={renderTextField}
                    label="Label E Header Main Invoice Total"
                    type="number"
                    style={styles.textFieldStyle}
                    />
            </div>
            <div className="row">
                <Field
                    name="hdrInvDate"
                    component={renderTextField}
                    label="Label F Header Invoice Date"
                    style={styles.textFieldStyle}
                    />
            </div>
            <div className="row">
                <Field
                    name="hdrPayDate"
                    component={renderTextField}
                    label="Label G Header Payment Date"
                    style={styles.textFieldStyle}
                    />
            </div>
            <div className="row">
               {projApollo.error?(
                    <div className="alert alert-danger" role="alert">
                      {projApollo.error}
                    </div>
               ):null}
            </div>    
            <div className="row">
                {renderSubmitButton(props)}  
            </div>    
           </form>   
        </div>    
    )
}

const submit = (values, dispatch, props) => {
    const { jwt,taskAcceptedInfoId } = props;
    props.invoiceSubmission(jwt,taskAcceptedInfoId,values,props.projApollo.invoiceItems);
}

const InvoiceHeaderReduxForm = reduxForm({
    form: 'invoiceHeaderForm',
    validate,
    onSubmit: submit
})(InvoiceHeaderForm)

const selector = formValueSelector('invoiceHeaderForm')

const mapStateToProps = (state, ownProps) => {
    return {
        projApollo: state.projApollo,
        isPdfIssue: selector(state, 'isPdfIssue'),
        isOverrideHdrMainAcctNo: selector(state, 'isOverrideHdrMainAcctNo'),
        isOverrideHdrCustCompName: selector(state, 'isOverrideHdrCustCompName')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      populateVendorsList: () => {
         dispatch(actions.populateVendorsList())  
      },
      refreshAcctNos: (jwt,vendorCode) => {
        dispatch(actions.refreshAcctNos(jwt,vendorCode))  
      },
      refreshCustNames: (jwt,vendorCode) => {
        dispatch(actions.refreshCustNames(jwt,vendorCode))  
      },
      refreshChargeDescs: (jwt,vendorCode) => {
        dispatch(actions.refreshChargeDescs(jwt,vendorCode))  
      },
      invoiceSubmission: (jwt,taskAcceptedInfoId,invoiceHeader,invoiceItems) => {
        dispatch(actions.invoiceSubmission(jwt,taskAcceptedInfoId,invoiceHeader,invoiceItems))  
      },
      validateVendorNAcctNo: (jwt,vendorCode,acctNo) => {
        dispatch(actions.validateVendorNAcctNo(jwt,vendorCode,acctNo))  
      },
      clearValidation: () => {
        dispatch(actions.clearValidation())  
      },
      selectedInvVendor: (code,vendors) => {
        dispatch(actions.selectedInvVendor(code,vendors))  
      },
      clearInvVendor: () => {
        dispatch(actions.clearInvVendor())  
      },
      clearAllInvoiceItems: () => {
        dispatch(actions.clearAllInvoiceItems())  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InvoiceHeaderReduxForm);