import * as actionTypes from './actionTypes';
import reduce from '../reduce';

const initialState = {
    openAddInvItem: false,
    invoiceItems: [],
    invoiceItemSelectedIndex: null,
    lastInvoiceItemSelectedIndex: null,
    invoiceVendors: [],
    invoiceVendorsLoaded: false,
    invoiceAcctNos: [],
    invoiceCustNames: [],
    invItemChargeDescs: [],
    error: '',
    invoiceSubmitted: false,
    validatedVendorNAcctNo: false,
    validateError: null,
    docTemplLines: null,
    validatedVendorCode: null,
    validatedAcctNo: null,
    invoiceVendor: null,
    invoiceItem: null
}

const openAddNewInvItem = (state) => {
    return {
        ...state,
        openAddInvItem: true
    }
}

const cancelAddNewInvItem = (state)=>{
    return {
        ...state,
        openAddInvItem: false
    }
}

const addNewInvoiceItem = (state,action)=> {
    let invoiceItems=state.invoiceItems;
    invoiceItems.push(action.newInvoiceItem);
    return {
        ...state,
        invoiceItems: invoiceItems,
        openAddInvItem: false
    }
}

const updateEditInvoiceItem = (state,action)=> {
    let invoiceItems=state.invoiceItems;
    let updateInvItem=action.newInvoiceItem;
    invoiceItems[state.invoiceItemSelectedIndex]=updateInvItem;

    return {
        ...state,
        invoiceItems: invoiceItems,
        openAddInvItem: false,
        invoiceItemSelectedIndex: null
    }
}

const moveDownInvoiceItem = (state)=>{
    let invoiceItems=state.invoiceItems;
    let currentInvItem = invoiceItems[state.invoiceItemSelectedIndex];
    let nextInvItem=invoiceItems[state.invoiceItemSelectedIndex + 1];
    let upId=currentInvItem.id;
    let downId=nextInvItem.id;

    let upInvItem=nextInvItem;
    upInvItem['id']=upId;
    
    let downInvItem=currentInvItem;
    downInvItem['id']=downId;
    
    invoiceItems[state.invoiceItemSelectedIndex]=upInvItem;
    invoiceItems[state.invoiceItemSelectedIndex + 1 ]=downInvItem;

    return {
        ...state,
        invoiceItems: invoiceItems
    }
}

const moveUpInvoiceItem = (state)=>{
    let invoiceItems=state.invoiceItems;
    let currentInvItem = invoiceItems[state.invoiceItemSelectedIndex];
    let prevInvItem=invoiceItems[state.invoiceItemSelectedIndex - 1];

    let upId=prevInvItem.id;
    let downId=currentInvItem.id;

    let upInvItem=currentInvItem;
    upInvItem.id=upId;
    let downInvItem=prevInvItem;
    downInvItem.id=downId;

    invoiceItems[state.invoiceItemSelectedIndex - 1]=upInvItem;
    invoiceItems[state.invoiceItemSelectedIndex]=downInvItem;
    
    return {
        ...state,
        invoiceItems: invoiceItems
    }
}

const updateInvoiceItems = (state,action)=>{
    return {
        ...state,
        invoiceItems: action.invoiceItems,
        lastInvoiceItemSelectedIndex: null,
        invoiceItemSelectedIndex: null
    }
}

const invItemSelected = (state,action)=>{
    return {
        ...state,
        invoiceItemSelectedIndex: action.invoiceItemSelectedIndex,
        lastInvoiceItemSelectedIndex: action.invoiceItemSelectedIndex,
        invoiceItem: state.invoiceItems[action.invoiceItemSelectedIndex]
    }
}

const invItemDeselected = (state)=>{
    return {
        ...state,
        invoiceItemSelectedIndex: null,
        invoiceItem: null
    }
}

const updateInvoiceVendors = (state,action)=>{
    return {
        ...state,
        invoiceVendors: action.invoiceVendors,
        invoiceVendorsLoaded: true
    }
}

const updateApiError = (state,action)=> {
    return {
        ...state,
        error: action.error
    }
}

const invSubmittedSuccess = (state) => {
    return {
        ...state,
        invoiceSubmitted: true,
        error: '',
        invoiceItems: []
    }
}

const invSubmittedError = (state,action) => {
    return {
        ...state,
        error: action.error
    }
}

const invSubmittedCompleted = (state) => {
    return {
        ...state,
        invoiceSubmitted: false
    }
}

const validatedVendorNAcctNoSuccess = (state,action) => {
    return {
        ...state,
        validatedVendorNAcctNo: true,
        validateError: null,
        docTemplLines: action.docTemplLines,
        validatedVendorCode: action.validatedVendorCode,
        validatedAcctNo: action.validatedAcctNo
    }
}

const validatedVendorNAcctNoError = (state,action) => {
    return {
        ...state,
        validatedVendorNAcctNo: true,
        validateError: action.error
    }
}

const clearValidation = (state) => {
    return {
        ...state,
        validatedVendorNAcctNo: false,
        validateError: null,
        docTemplLines: null,
        validatedVendorCode: null,
        validatedAcctNo: null
    }
}

const selectedInvVendor = (state,action)=>{
    return {
        ...state,
        invoiceVendor: action.invoiceVendor
    }
}

const clearInvVendor = (state)=>{
    return {
        ...state,
        invoiceVendor: null
    }
}

const refreshInvoiceAcctNos = (state, action)=>{
    return {
        ...state,
        invoiceAcctNos: action.invoiceAcctNos
    }
}

const refreshInvoiceCustNames = (state, action)=>{
    return {
        ...state,
        invoiceCustNames: action.invoiceCustNames
    }
}

const refreshInvoiceItemChargeDescs = (state, action)=> {
    return {
        ...state,
        invItemChargeDescs: action.invItemChargeDescs
    }
}

const clearAllInvoiceItems = (state) => {
    return {
        ...state,
        invoiceItems: []
    }
}

export default reduce(initialState,{
    [actionTypes.OPEN_ADD_INV_ITEM_FORM]: openAddNewInvItem,
    [actionTypes.CANCEL_ADD_INV_ITEM_FORM]: cancelAddNewInvItem,
    [actionTypes.ADD_NEW_INV_ITEM]: addNewInvoiceItem,
    [actionTypes.UPDATE_EDIT_INV_ITEM]: updateEditInvoiceItem,
    [actionTypes.MOVE_DOWN_INV_ITEM]: moveDownInvoiceItem,
    [actionTypes.MOVE_UP_INV_ITEM]: moveUpInvoiceItem,
    [actionTypes.INV_ITEM_SELECTED]: invItemSelected,
    [actionTypes.INV_ITEM_DESELECTED]: invItemDeselected,
    [actionTypes.UPDATE_INV_ITEMS]: updateInvoiceItems,
    [actionTypes.UPDATE_INV_VENDORS]: updateInvoiceVendors,
    [actionTypes.UPDATE_API_ERROR]: updateApiError,
    [actionTypes.INV_SUBMITTED_SUCCESS]: invSubmittedSuccess,
    [actionTypes.INV_SUBMITTED_ERROR]: invSubmittedError,
    [actionTypes.INV_SUBMITTED_COMPLETED]: invSubmittedCompleted,
    [actionTypes.INV_VALIDATE_VENDOR_N_ACCTNO_SUCCESS]: validatedVendorNAcctNoSuccess,
    [actionTypes.INV_VALIDATE_VENDOR_N_ACCTNO_ERROR]: validatedVendorNAcctNoError,
    [actionTypes.INV_CLEAR_VALIDATION]: clearValidation,
    [actionTypes.SELECTED_INV_VENDOR]: selectedInvVendor,
    [actionTypes.CLEAR_INV_VENDOR]: clearInvVendor,
    [actionTypes.REFRESH_INV_ACCT_NOS]: refreshInvoiceAcctNos,
    [actionTypes.REFRESH_INV_CUST_NAMES]: refreshInvoiceCustNames,
    [actionTypes.REFRESH_INV_CHARGE_DESCS]: refreshInvoiceItemChargeDescs,
    [actionTypes.CLEAR_ALL_INV_ITEMS]: clearAllInvoiceItems
});