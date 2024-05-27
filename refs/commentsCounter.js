import { updateRefView } from '../utils/domUtils.js';

export const comments = {
    _value: 0,

    getValue() {
        return this._value;
    },

    setValue(key) {
        this._value += 1;

        updateRefView(key, this._value);
    }
};
