import state from '../state';
import { mode } from './base.util';
export const addAuthorizationHeaders = headers => {
    // Handle both development and production modes with Authorization headers
    switch (state['mode'].mode) {
        case mode.mode.development:
        case mode.mode.production:
            headers['authorization'] = 'Bearer ' + state['token'];
            break;
    }
};
export const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return token;
};
export const setToken = token => localStorage.setItem('token', token);
