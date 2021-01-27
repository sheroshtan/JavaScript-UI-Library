import './lib/lib';

$lib("#first-btn").click(() => {
    $lib('div').eq(1).fadeToggle(800);
});

$lib("#second-btn").click(() => {
    $lib('div').eq(2).fadeToggle(800);
});

$lib("#third-btn").click(() => {
    $lib('div').eq(1).fadeToggle(800);
    $lib('div').eq(2).fadeToggle(800);
});


/*
animation
$lib('button').on('click', function() {
    $lib(this).fadeOut(3000);
})*/
