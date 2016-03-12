$(function() {
    var $speech = $('div.speech');
    var defaultSize = $speech.css('fontSize');
    
    $('#switcher button').on('click', function() {
        var num = parseFloat($speech.css('fontSize'));
        switch (this.id) {
            case 'switcher-large':
                num *= 1.5;
                break;
            case 'switcher-small':
                num /= 1.5;
                break;
            default:
                num = parseFloat(defaultSize);
        }
        //$speech.css('fontSize', num+'px');
        $speech.animate({fontSize: num+'px'}, 'slow');
    })
    
    var $secondPara = $('p:eq(1)');
    $secondPara.hide();
    $('a.more').on('click', function(evt) {
        evt.preventDefault();
        $secondPara.slideToggle('slow');
        if ($(this).text() === "read more") {
            $(this).text('read less');
        } else {
            $(this).text('read more');
        }
    });
    
    $('div.label').on('click', function() {
        $('#switcher').css({position: 'relative'}).animate({left: '+=100px'}, 'slow');
    });
    
    $('#switcher').css({position: 'relative'});
    $(document).on('keyup', function(evt) {
        var move;
        switch(evt.which) {
            case 37:
                move = {left: "-=20px"};
                break;
            case 38:
                move = {top: "-=20px"};
                break;
            case 39:
                move = {left: "+=20px"};
                break;
            case 40:
                move = {top: "+=20px"};
                break;
            default:
        }
        if (move) {
            $('#switcher').animate(move);
        }
    });
})