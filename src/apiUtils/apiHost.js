export default function getApiHost(){
    let host = window.location.hostname;
    
    if (host == 'localhost'){
        return 'http://localhost:8899';
    } else {
        return 'https://phoenix.swarmcolony.com';
    }
}