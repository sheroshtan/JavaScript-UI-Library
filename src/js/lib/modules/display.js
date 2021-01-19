import $lib from '../core';

$lib.prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].style) {
            continue;
        }
        this[i].style.display = '';
    }
    return this;
};

$lib.prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }
    return this;
};

$lib.prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].style) {
            continue;
        } else if(this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }
    return this;
};