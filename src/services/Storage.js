import {Utils} from './Utils';

const prefix = 'twitch-alert'

export const Storage = {
    get(name, isObject = true) {
        let value = localStorage.getItem(`${prefix}-${name}`);

        if (value && isObject) {
            return JSON.parse(value);
        }
        else if (value) {
            return value;
        }
        else {
            return isObject ? {} : '';
        }
    },
    set(name, value) {
        if (!Utils.isString(value)) {
            value = JSON.stringify(value);
        }

        localStorage.setItem(`${prefix}-${name}`, value);
    }
}