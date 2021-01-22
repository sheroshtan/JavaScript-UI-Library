import './lib/lib';

$lib('button').on('click', function() {
    $lib('div').eq(1).toggleClass('active');
})

$lib('div').on('click', function() {
    console.log($lib(this).index());
})

//console.log($lib('div').eq(2).find('.some'));
//console.log($lib('.some').closest('.find-measd'));

console.log($lib('.more').eq(0).siblings());