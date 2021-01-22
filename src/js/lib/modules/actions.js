import $lib from '../core';

$lib.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

$lib.prototype.eq = function (index) {
    const swap = this[index];
    const objLength = Object.keys(this).length;

    for(let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

$lib.prototype.index = function () {
    const elements = [...this[0].parentNode.children];
    return elements.findIndex(item => item === this[0]);
};

$lib.prototype.find = function (selector) {
    const objCopy = Object.assign({}, this);
    //let numberOfItems = 0;
    let counter = 0;

    for(let i = 0; i < objCopy.length; i++) {
        const arr = objCopy[i].querySelectorAll(selector);
        if(arr.length == 0) {
            continue;
        }

        for(let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        //numberOfItems += arr.length;
    }
    this.length = counter;

    const objLength = Object.keys(this).length;
    for(; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$lib.prototype.closest = function (selector) {
    let counter = 0;

    for(let i = 0; i < this.length; i++) {
        const elem = this[i].closest(selector);

        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for(; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
}

$lib.prototype.siblings = function () {
    debugger;
    const objCopy = Object.assign({}, this);
    //let numberOfItems = 0;
    let counter = 0;

    for(let i = 0; i < objCopy.length; i++) {
        const arr = objCopy[i].parentElement.children;

        for(let j = 0; j < arr.length; j++) {
            if(objCopy[i] !== arr[j]) {
                this[counter] = arr[j];
                counter++;
            } else {
                continue;
            }
        }

        //numberOfItems += arr.length;
    }

    this.length = counter;

    const objLength = Object.keys(this).length;
    for(; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
}


// ONLY FOR TEST
$lib.prototype.test = function () {
    console.log("this, ", this);
    console.log("this.length, ", this.length);
    console.log('Object.keys(this).length', Object.keys(this).length);

    for(let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
};