import { updateRefView } from '../utils/domUtils.js';

export const likes = {
    _values: {},

    getValue(key) {
        return this._values[key];
    },

    setValue(key, newValue) {
        if (!this._values[key]) this._values[key] = 0

        this._values[key] += newValue || 0;

        updateRefView(key, this._values[key]);
    }
};
