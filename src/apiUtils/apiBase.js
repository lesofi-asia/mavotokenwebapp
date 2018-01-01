const DEFAULT_HEADER='phoenix-auth-token';
export const API_GET='GET';
export const API_POST='POST';
export const API_PUT='PUT';
export const API_DELETE='DELETE';

export const callFetch = (method,url,payload,authToken,authHeader) => {
    let header=DEFAULT_HEADER;
    
    if (authHeader) {
        header=authHeader;
    }
    
    let headers={};
    if (authToken){
        headers[header]=authToken;
    }
    headers['Content-Type']='application/json';
    
    if (method===API_GET){
        return fetch(url, {
            method: method,
            headers,
            credentials: "same-origin"
        });
    }else {
        return fetch(url, {
            method: method,
            body: JSON.stringify(payload),
            headers,
            credentials: "same-origin"
        });
    }
}

exports.API_GET=API_GET;
exports.API_POST=API_POST;
exports.API_PUT=API_PUT;
exports.API_DELETE=API_DELETE;
exports.callFetch=callFetch;