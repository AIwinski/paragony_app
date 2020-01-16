
import { AsyncStorage } from 'react-native';;

const API_URL = 'https://stormy-shelf-85819.herokuapp.com';

export const storeToken = async (token: string) => {
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
            //"Content-Type": "application/json",
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
    console.log("add receipt");
    const fd = new FormData();
    //only append for android devices
    fd.append('file', imageFile);
    fd.append('title', title);
    fd.append('description', description);

    //show whats send
    console.log("===========================");
    console.log(await appendTokenToRequestOptions({ method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: fd }));
    console.log("===========================");

    var req = new XMLHttpRequest();

    const token = await getToken();
    req.open('POST', API_URL + '/receipts', true);
    req.setRequestHeader("Authorization", `Bearer ${token}`);
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200)
                console.log(req.responseText);
            else
                console.log("Błąd\n" + req.responseText);
        }
    };
    req.send(fd);
    return req.responseText;


    // return fetch(API_URL + '/receipts',
    //     await appendTokenToRequestOptions({ method: 'POST',
    //         headers: {'Content-Type': 'multipart/form-data'},
    //         body: fd }))
    //         .then(response => {
    //             return response.json();
    //         }).catch(error => {
    //             console.log(error)
    // });
};
