import axios from "axios";
const https = axios.create({
    timeout: 30000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-With": "XMLHttpRequest"
    }
})
export const httpPost = (url,params)=>{
    return https.post(url,params);
}
export const httpGet = (url,params) =>{
    return https.get(url,{params});
}