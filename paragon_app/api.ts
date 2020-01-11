
import { AsyncStorage } from 'react-native';;

const API_URL = 'https://dashboard.heroku.com/apps/stormy-shelf-85819';

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
        };
    }
    return update;
};

export const login = (email: string, password: string) => {
    fetch(API_URL + '/users/login', { method: 'POST', body: JSON.stringify({ email, password }) }).then(response => {
        return response.json();
    });
};

export const register = (email: string, password: string) => {
    fetch(API_URL + '/users/register', { method: 'POST', body: JSON.stringify({ email, password }) }).then(response => {
        console.log(response.headers);
        return response.json();
    });
};

export const getAllReceipts = async () => {
    fetch(API_URL + '/receipts', await appendTokenToRequestOptions({ method: 'GET' })).then(response => {
        return response.json();
    });
};

export const getReceiptById = async (id: string) => {
    fetch(API_URL + '/receipts/' + id, await appendTokenToRequestOptions({ method: 'GET' })).then(response => {
        return response.json();
    });
};

export const addReceipt = async (title: string, description: string, imageFile: any) => {
    const fd = new FormData();
    fd.append('file', imageFile);
    fd.set('title', title);
    fd.set('description', description);
    fetch(API_URL + '/receipts', await appendTokenToRequestOptions({ method: 'POST', body: fd })).then(response => {
        return response.json();
    });
};
