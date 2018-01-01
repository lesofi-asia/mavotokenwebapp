import * as actionTypes from './actionTypes';
import { 
    getVendorsListApi,
    submitTaskApi,
    getProjApolloAcctNos,
    getProjApolloCustNames,
    getProjApolloChargeDescs,
    postValidatVendorNAcctNoApi } from '../../apiUtils/api';

export const openAddInvItemForm=()=>{
    return { type: actionTypes.OPEN_ADD_INV_ITEM_FORM };
}

export const cancelAddInvItemForm=()=>{
    return { type: actionTypes.CANCEL_ADD_INV_ITEM_FORM };
}

export const addNewInvoiceItem=(newInvoiceItem)=>{
    return { type: actionTypes.ADD_NEW_INV_ITEM, newInvoiceItem };
}

export const updateEditInvoiceItem=(newInvoiceItem)=>{
    return { type: actionTypes.UPDATE_EDIT_INV_ITEM, newInvoiceItem };
}

export const moveDownInvoiceItem=()=>{
    return { type: actionTypes.MOVE_DOWN_INV_ITEM };
}

export const moveUpInvoiceItem=()=>{
    return { type: actionTypes.MOVE_UP_INV_ITEM };
}

export const invItemSelected=(index)=>{
    return { type: actionTypes.INV_ITEM_SELECTED, invoiceItemSelectedIndex: index};
}

export const invItemDeselected=()=>{
    return { type: actionTypes.INV_ITEM_DESELECTED };
}

export const removeAnInvoiceItem=(currentInvItems,index)=>{
    let invItems=currentInvItems;
    invItems.splice(index, 1);
    //Reindex
    let newInvItems=[];
    let i=-1;
    invItems.forEach((item)=>{
        let newItem=item;
        newItem.id=i;
        newInvItems.push(newItem);
        i++;
    })

    return { type: actionTypes.UPDATE_INV_ITEMS, invoiceItems: newInvItems };
}

export const populateVendorsList=()=>{
    return dispatch => getVendorsListApi().then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch({type: actionTypes.UPDATE_API_ERROR,error: data.error});
        }else {
            dispatch({type: actionTypes.UPDATE_INV_VENDORS, invoiceVendors: data });
        }
    }).catch((err)=>{
        console.log(err);
        dispatch({type: actionTypes.UPDATE_API_ERROR, error: err});
    })
}

export const refreshAcctNos=(jwt,vendorCode)=>{
    return dispatch => getProjApolloAcctNos(jwt,vendorCode).then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch({type: actionTypes.UPDATE_API_ERROR,error: data.error});
        }else {
            dispatch({type: actionTypes.REFRESH_INV_ACCT_NOS, invoiceAcctNos: data });
        }
    }).catch((err)=>{
        console.log(err);
        dispatch({type: actionTypes.UPDATE_API_ERROR, error: err});
    })
}

export const refreshCustNames=(jwt,vendorCode)=>{
    return dispatch => getProjApolloCustNames(jwt,vendorCode).then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch({type: actionTypes.UPDATE_API_ERROR,error: data.error});
        }else {
            dispatch({type: actionTypes.REFRESH_INV_CUST_NAMES, invoiceCustNames: data });
        }
    }).catch((err)=>{
        console.log(err);
        dispatch({type: actionTypes.UPDATE_API_ERROR, error: err});
    })
}

export const refreshChargeDescs=(jwt,vendorCode)=>{
    return dispatch => getProjApolloChargeDescs(jwt,vendorCode).then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch({type: actionTypes.UPDATE_API_ERROR,error: data.error});
        }else {
            dispatch({type: actionTypes.REFRESH_INV_CHARGE_DESCS, invItemChargeDescs: data });
        }
    }).catch((err)=>{
        console.log(err);
        dispatch({type: actionTypes.UPDATE_API_ERROR, error: err});
    })
}

export const invoiceSubmission = (jwt,taskAcceptedInfoId,invoiceHeader,invoiceItems)=>{
    let payload={};
    payload.invoiceHeader=invoiceHeader;
    payload.invoiceItems=invoiceItems
    payload.taskAcceptedInfoId=taskAcceptedInfoId;

    return dispatch => submitTaskApi(jwt,payload).then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch({type: actionTypes.INV_SUBMITTED_ERROR,error: data.error});
        }else {
            dispatch({type: actionTypes.INV_SUBMITTED_SUCCESS});
        }
    }).catch((err)=>{
        console.log(err);
        dispatch({type: actionTypes.INV_SUBMITTED_ERROR, error: err});
    })
}

export const invoiceSubmissionCompleted = () => {
    return { type: actionTypes.INV_SUBMITTED_COMPLETED };
}

export const validateVendorNAcctNo = (jwt,vendorCode,acctNo)=>{
    let payload={};
    payload.vendorCode=vendorCode;
    payload.acctNo=acctNo;

    return dispatch => postValidatVendorNAcctNoApi(jwt,payload).then((res)=>res.json()).then((data) =>{
        //console.log(data)
        if (data.error) {
            //console.log(data.error)
            dispatch({type: actionTypes.INV_VALIDATE_VENDOR_N_ACCTNO_ERROR, error: data.error});
        }else {
            dispatch({
                type: actionTypes.INV_VALIDATE_VENDOR_N_ACCTNO_SUCCESS, 
                docTemplLines: data.docTemplLines,
                validatedVendorCode: vendorCode,
                validatedAcctNo: acctNo
            });
        }
    }).catch((err)=> {
        console.log(err);
        dispatch({type: actionTypes.INV_VALIDATE_VENDOR_N_ACCTNO_ERROR, error: err});
    })
}

export const clearValidation = () => {
    return { type: actionTypes.INV_CLEAR_VALIDATION };
}

export const selectedInvVendor=(code,vendors)=>{
    let search = vendors.find(x=>x.code===code);
    if (search){
        return { type: actionTypes.SELECTED_INV_VENDOR, invoiceVendor: search };
    }else {
        return { type: actionTypes.CLEAR_INV_VENDOR };
    }
}

export const clearInvVendor=()=>{
    return { type: actionTypes.CLEAR_INV_VENDOR };
}

export const clearAllInvoiceItems=()=>{
    return { type: actionTypes.CLEAR_ALL_INV_ITEMS };
}