import $lib from '../core';

$lib.prototype.on = function (event, cb) {
    if (event && cb) {
        for (let i = 0; i < this.length; i++) {
            this[i].addEventListener(event, cb);
        }
    }
    return this;
}

$lib.prototype.off = function (event, cb) {
    if (event && cb) {
        for (let i = 0; i < this.length; i++) {
            this[i].removeEventListener(event, cb);
        }
    }
    return this;
}

$lib.prototype.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }

    }
    return this;
}