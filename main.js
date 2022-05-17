$(document).ready(function () {
    $('input').on('keypress', function (e) { 
        if (e.keyCode === 13) {
            let todoText = $(this).val();
            $(this).val('');
            $('ul').append('<li>' + todoText + ' <span>x</span></li>');
        }
    });

    $('ul').on('click', 'span', function (e) {
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        e.stopPropagation();
    });

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('done');
    });

    $('.color1').on('click', function () {
        $('.color-selection').css('background-color', 'var(--card-color)');
        $('body').css({
            backgroundColor: 'var(--primary-color)',
            color: 'var(--font-color)'
        });
        $('#container').css({
            backgroundColor: 'var(--card-color)',
            borderColor: 'var(--border-color)',
            boxShadow: '0 3px 5px var(--border-color)'
        });
        $('input').css('color', 'var(--font-color)');
    });

    $('.color2').on('click', function () {
        $('.color-selection').css('background-color', 'var(--card-color2)');
        $('body').css({
            backgroundColor: 'var(--primary-color2)',
            color: 'var(--font-color2)'
        });
        $('#container').css({
            backgroundColor: 'var(--card-color2)',
            borderColor: 'var(--border-color2)',
            boxShadow: '0 3px 5px var(--border-color2)'
        });
        $('input').css('color', 'var(--font-color2)');
    });

    $('.color3').on('click', function () {
        $('.color-selection').css('background-color', 'var(--card-color3)');
        $('body').css({
            backgroundColor: 'var(--primary-color3)',
            color: 'var(--font-color3)'
        });
        $('#container').css({
            backgroundColor: 'var(--card-color3)',
            borderColor: 'var(--border-color3)',
            boxShadow: '0 3px 5px var(--border-color3)'
        });
        $('input').css('color', 'var(--font-color3)');
    });

    $('.color4').on('click', function () {
        $('.color-selection').css('background-color', 'var(--card-color4)');
        $('body').css({
            backgroundColor: 'var(--primary-color4)',
            color: 'var(--font-color4)'
        });
        $('#container').css({
            backgroundColor: 'var(--card-color4)',
            borderColor: 'var(--border-color4)',
            boxShadow: '0 3px 5px var(--border-color4)'
        });
        $('input').css('color', 'var(--font-color4)');
    });
});