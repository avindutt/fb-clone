import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";
import { getFormBody } from "../utils";

const customFetch = async(url, {body, ...customConfig}) => { // the second argument is an object that has email, password, other special request configurations etc. Important part (email, password etc.) will be collected in body (as it will already be sent with the key name body) and rest will be spread in customConfig (headers etc.)
    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const headers = {
        // 'content-type' : 'application/json',
        'content-type' : 'application/x-www-form-urlencoded',
        //  Accept : 'application/json'
    }

    if(token){
     headers.Authorisation = `Bearer ${token}`;   
    }

    const config = {
        ...customConfig,
        headers : {
            ...headers,
            ...customConfig.headers
        },
    };

    if(body){
        // config.body = JSON.stringify(body);
        config.body = getFormBody(body);
    }

    try{
        const response = await fetch(url, config);
        const data = await response.json();

        if(data.success){
            return {
                data: data.data,
                success: true
            };
        }
        throw new Error(data.message);

    } catch(error) {
        console.log('error');
        return {
            message: error.message,
            success: false
        };
    }
};

export const getPosts = (page = 1, limit = 5) => {
    return customFetch(API_URLS.posts(page, limit), {
        method: 'GET',
    });
};

export const login = (email, password) => {
    return customFetch(API_URLS.login(), {
        method: 'POST',
        body: {email, password}
    });
};

export const register = async (name, email, password, confirmPassword) => {
    return customFetch(API_URLS.signup(), {
        method: 'POST',
        body: { name, email, password, confirm_password: confirmPassword },
    });
};