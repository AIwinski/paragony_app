
import { AsyncStorage } from 'react-native';;

const API_URL = 'https://stormy-shelf-85819.herokuapp.com';

const storeToken = async (token: string) => {
    try {
        await AsyncStorage.setItem('@auth_token', token);
    } catch (e) {
    }
};

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@auth_token');
        if (value !== null) {
            return value;
        }
    } catch (e) {
    }
};

const appendTokenToRequestOptions = async (options: any) => {
    const update = { ...options };
    const token = await getToken();
    if (token) {
        update.headers = {
            ...update.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
    }
    return update;
};

export const login = (email: string, password: string) => {
    return fetch(API_URL + '/users/login', { method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password }) }).then(response => {
        return response.json();
    });
};

export const register = (email: string, password: string) => {
    return fetch(API_URL + '/users/register', { method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password }) }).then(response => {
        return response.json();
    });
};

export const getAllReceipts = async () => {
    return fetch(API_URL + '/receipts', await appendTokenToRequestOptions({ method: 'GET' })).then(response => {
        return response.json();
    });
};

export const getReceiptById = async (id: string) => {
    return fetch(API_URL + '/receipts/' + id, await appendTokenToRequestOptions({ method: 'GET' })).then(response => {
        return response.json();
    });
};

export const addReceipt = async (title: string, description: string, imageFile: any) => {
    console.log("fd");
    const fd = new FormData();
    console.log(fd);
    fd.append('file', imageFile);
    fd.set('title', title);
    fd.set('description', description);
    console.log(fd);
    return fetch(API_URL + '/receipts', await appendTokenToRequestOptions({ method: 'POST', body: fd })).then(response => {
        return response.json();
    });
};
