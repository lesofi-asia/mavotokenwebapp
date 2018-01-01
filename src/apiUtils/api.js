import getApiHost from './apiHost';
import {
    callFetch,
    API_GET,
    API_DELETE,
    API_POST,
    API_PUT
} from './apiBase';

export function submitTaskApi(jwtToken,payload){
    let url=`${getApiHost()}/api/worker/tasks/submit`;
    return callFetch(API_POST,url,payload,jwtToken);
}

export const getVendorsListApi=()=>{
    let url=`${getApiHost()}/api/vdpVendors`;
    return callFetch(API_GET,url)
}

export const getProjApolloAcctNos=(jwt,vendorCode)=>{
    let url=`${getApiHost()}/api/projApollo/acctNos/${vendorCode}`;
    return callFetch(API_GET,url,null,jwt);
}

export const getProjApolloCustNames=(jwt,vendorCode)=>{
    let url=`${getApiHost()}/api/projApollo/custNames/${vendorCode}`;
    return callFetch(API_GET,url,null,jwt);
}

export const getProjApolloChargeDescs=(jwt,vendorCode)=>{
    let url=`${getApiHost()}/api/projApollo/chargeDescs/${vendorCode}`;
    return callFetch(API_GET,url,null,jwt);
}

export const postValidatVendorNAcctNoApi=(jwtToken,payload)=>{
    let url=`${getApiHost()}/api/projApollo/validateAcctNo`;
    return callFetch(API_POST,url,payload,jwtToken);
}

exports.submitTaskApi=submitTaskApi;
exports.getVendorsListApi=getVendorsListApi;
exports.postValidatVendorNAcctNoApi=postValidatVendorNAcctNoApi;
exports.getProjApolloAcctNos=getProjApolloAcctNos;
exports.getProjApolloCustNames=getProjApolloCustNames;
exports.getProjApolloChargeDescs=getProjApolloChargeDescs;