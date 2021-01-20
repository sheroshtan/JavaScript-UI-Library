import $lib from '../core';

$lib.prototype.addClass = function(...classes) {
      for(let i = 0; i < this.length; i++) {
          if(this[i].classList) {
              this[i].classList.add(...classes);
          }
      }

      return this;
};

$lib.prototype.removeClass = function(...classes) {
    for(let i = 0; i < this.length; i++) {
        if(this[i].classList) {
            this[i].classList.remove(...classes);
        }
    }

    return this;
};

$lib.prototype.toggleClass = function(clazz) {
    for(let i = 0; i < this.length; i++) {
        if(this[i].classList) {
            this[i].classList.toggle(clazz);
        }
    }

    return this;
};