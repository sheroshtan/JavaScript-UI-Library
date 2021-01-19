const $lib = function(selector) {
    return new $lib.prototype.init(selector);
};

$lib.prototype.init = function(selector) {
    if(!selector) return this;

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    console.log(this);
    return this;
};

$lib.prototype.init.prototype = $lib.prototype;

window.$lib = $lib;

export default $lib;