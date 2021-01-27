import $lib from "../core";

$lib.prototype.animateOverTime = function(duration, cb, finalCb) {
    let timeStart;

    function _animateOverTime(time) {
        if(!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        cb(complection);

        if(timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if(typeof finalCb === 'function') {
                finalCb();
            }
        }
    }

    return _animateOverTime;
}

$lib.prototype.fadeIn = function(duration, display = 'block', final) {

    for(let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        }

        const ani = this.animateOverTime(duration, _fadeIn, final);

        requestAnimationFrame(ani);
    }

    return this;
}

$lib.prototype.fadeOut = function(duration, final) {

    for(let i = 0; i < this.length; i++) {
        const _fadeOUt = (complection) => {
            this[i].style.opacity = 1 - complection;
            if(complection == 1) {
                this[i].style.display = 'none';
            }
        }

        const ani = this.animateOverTime(duration, _fadeOUt, final);

        requestAnimationFrame(ani);
    }

    return this;
}

$lib.prototype.fadeToggle = function(duration, display = 'block', final) {

    for(let i = 0; i < this.length; i++) {
        if(window.getComputedStyle(this[i]).display === 'none') {
            $lib(this[i]).fadeIn(duration, display, final);
        } else {
            $lib(this[i]).fadeOut(duration);
        }
    }

    return this;
}