$( document ).ready(function() {


$('nav div').click(function() {
    $('ul').slideToggle(1000);
    $('ul ul').css('display', 'none');
});

$('ul li').click(function() {
    $('ul ul').slideUp(1000);
    $(this).find('ul').slideToggle(1000);
});

$(window).resize(function() {
    if($(window).width() > 768) {
        $('ul').removeAttr('style');
    }
});

});