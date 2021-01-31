import $lib from '../core';

$lib.prototype.tab = function() {
    for(let i = 0; i < this.length; i++) {
        $lib(this[i]).click((e) => {
            e.preventDefault();
            $lib(this[i])
                .addClass('tab-item-active')
                .siblings()
                .removeClass('tab-item-active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content-active')
                .eq($lib(this[i]).index())
                .addClass('tab-content-active')
        });
    }
};

$lib("[data-tabpanel] .tab-item").tab();