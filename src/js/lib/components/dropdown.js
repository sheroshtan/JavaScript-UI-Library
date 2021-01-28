import $lib from '../core';

$lib.prototype.dropdown = function() {
    for(let i = 0; i < this.length; i++) {
        let id = this[i].getAttribute('id');

        $lib(this[i]).click(() => {
            $lib(`[data-toggle-id="${id}"]`).fadeToggle(300);
        })
    }
};

$lib('.dropdown-toggle').dropdown();