const $lib = function(selector) {
    return new $lib.prototype.init(selector);
};

$lib.prototype.init = function(selector) {
    if(!selector) return this;

    if(selector.tagName) {
        this[0] = selector;
        this.length = 1;
    } else {
        Object.assign(this, document.querySelectorAll(selector));
        this.length = document.querySelectorAll(selector).length;
    }
    return this;
};

$lib.prototype.init.prototype = $lib.prototype;

window.$lib = $lib;

export default $lib;