import $lib from '../core';

$lib.prototype.modal = function(created) {
    for(let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $lib(this[i]).click((e) => {
            e.preventDefault();
            $lib(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        })

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $lib(elem).click(() => {
                $lib(target).fadeOut(500);
                document.body.style.overflow = '';
                if(created) {
                    document.querySelector(target).remove();
                }
            })
        })

        $lib(target).click((e) => {
            if(e.target.classList.contains('modal')) {
                $lib(target).fadeOut(500);
                document.body.style.overflow = '';
                if(created) {
                    document.querySelector(target).remove();
                }
            }
        })
    }
};

$lib.prototype.createModal = function({ text: {title, body}, btns } = {}) {
    for(let i = 0; i < this.length; i++) {

        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        const buttons = [];
        for(let j = 0; j < btns.count; j++) {
            console.log(btns);
            const [btnText, classNames, isClose, cb] = btns.settings[j];

            let btn = document.createElement('button');
            btn.textContent = btnText;
            btn.classList.add('btn', ...classNames);

            if(isClose) {
                btn.setAttribute('data-close', 'true');
            }

            if(cb && typeof cb === 'function') {
                btn.addEventListener('click', cb);
            }
            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">${title}</div>
                    </div>
                    <div class="modal-body">
                       ${body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.append(modal);

        $lib(this[i]).modal(true);
        $lib(this[i].getAttribute('data-target')).fadeIn(500);
    }
}

$lib('[data-toggle="modal"]').modal();