import './lib/lib';

$lib('#trigger').click(() => {
    $lib('#trigger').createModal({
        text: {
            title: 'Modal Title',
            body: 'Some text lorem asdas asd as das das das dasasdsadasdasd adas dasdasdad'
        },
        btns: {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true,
                ],
                [
                    'Accept',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Ok!')
                    }
                ]
            ]
        }
    });
})

/*
animation
$lib('button').on('click', function() {
    $lib(this).fadeOut(3000);
})*/

$lib()
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res));

$lib()
    .post('https://jsonplaceholder.typicode.com/posts', {name: 'bob', age: 13})
    .then(res => console.log(res));