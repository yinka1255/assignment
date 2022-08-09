import {API_PROD_URL as SERVER_URL} from "@env"

export const doGet = (url) => {
    console.log(SERVER_URL, 'API_PROD_URL')
    return fetch(`${SERVER_URL}/${url}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
      })
      .then(response => 
        response.json().then(data => ({
            rawResponse: response,
            status: response.ok, 
            res: data
        })) 
    ).then(res => {
        if(res.res.message === "Unauthorized!"){
            throw res.res
        }else if(res.status == false){
            throw res.res
        }else{
            return res;
        }
    })
    .catch((err)=> {
        throw err;
    })
};

export const doPost = (payload, url) => {
    return fetch(`${SERVER_URL}/${url}`, {
        method: 'POST',
        headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+payload.token
        },
        body: JSON.stringify(payload)
    })
        .then(response => 
            response.json().then(data => ({
                rawResponse: response,
                status: response.ok, 
                res: data
            }))
        ).then(res => {
            if(res.res.message === "Unauthorized!"){
                throw res.res
            }else if(res.status == false){
                throw res.res
            }else{
                return res;
            }
        })
        .catch((err)=> {
            throw err;
        })
        
};

export const doPostUpload = (payload, url) => {
    return fetch(`${SERVER_URL}/${url}`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer '+payload.token
        },
        body: payload
    })
        .then(response => 
            response.json().then(data => ({
                rawResponse: response,
                status: response.ok, 
                res: data
            }))
        ).then(res => {
            return res;
        })
        .catch((err)=> {
            throw err;
        })
        
};

export const doPut = (payload, url) => {
    return fetch(`${SERVER_URL}/${url}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+payload.token
        },
        body: JSON.stringify(payload)
      })
      .then(response => 
        response.json().then(data => ({
            rawResponse: response,
            status: response.ok, 
            res: data
        }))
    ).then(res => {
        if(res.res.message === "Unauthorized!"){
            throw res.res
        }else if(res.status == false){
            throw res.res
        }else{
            return res;
        }
    })
    .catch((err)=> {
        throw err;
    })
};

export default {doGet, doPost, doPostUpload, doPut} 