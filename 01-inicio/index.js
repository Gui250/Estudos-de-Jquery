$(function() {
    // Seletor de Elemento
    $("b").text("Jquery Essentials");

    $('.jquery').css('color', 'red'); 

    $('#jquery').text('Jquery Essentials');

    $('div *').css('border', '1px solid #ccc');

    $('div, b').css({
        background: 'blue', 
        color: 'white',
        'border-radius': '5px',
        padding: '10px',
        'font-size': '1.5em'	
    })

    $('b').add('p').css('font-size', '2em');
})