export * from './constants'; //this syntax does not work with export default

export const setItemInLocalStorage = (key, value) => {
    if(!key || !value) {
        console.error('Cannot store in LS');
    }

    const valueToStore = typeof value !== 'string' ? JSON.stringify(value) : value;

    localStorage.setItem(key, valueToStore);
};


export const getItemFromLocalStorage = (key) => {
    if(!key) {
        console.error('Cannot get the value from LS');
    }

    return localStorage.getItem(key);
};


export const removeItemFromLocalStorage = (key) => {
    if(!key) {
        console.error('Cannot remove the key from LS');
    }

    localStorage.removeItem(key);
};


export const getFormBody = (params) => {
    let formBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

        formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&'); //username=aakash&password=123213
}
















// import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "./constants";

// export {
//   API_URLS,
//   LOCALSTORAGE_TOKEN_KEY
// }