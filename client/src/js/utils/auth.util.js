import state from '../state';
import { mode } from './base.util';
export const addAuthorizationHeaders = headers => {
    // ! For Development
    switch (state['mode'].mode) {
        case mode.mode.development:
            headers['authorization'] = 'Bearer ' + state['token'];
    }
};
