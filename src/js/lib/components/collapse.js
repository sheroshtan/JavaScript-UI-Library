import $lib from '../core';

$lib.prototype.collapse = function (headActive = 'collapse-head-active',
                                    contentActive = 'collapse-content-active',
                                    padding = 40) {

    for (let i = 0; i < this.length; i++) {
        $lib(this[i]).click(() => {
            $lib(this[i]).toggleClass(headActive);
            $lib(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + padding + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        })
    }
};

$lib('.collapse-head').collapse();