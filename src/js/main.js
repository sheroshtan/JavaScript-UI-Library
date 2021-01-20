import './lib/lib';

document.addEventListener('DOMContentLoaded', () => {
    $lib('.active').click(test);
});

function test() {
    console.log('hello')
}