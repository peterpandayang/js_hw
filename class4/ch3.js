$(function() {
    var styles = ["default", "narrow", "large"],
    i = 0;

    $('#switcher').hover(
        function() {
            $(this).addClass("hover");
        },
        function() {
            $(this).removeClass("hover");
        });
        
    $('#switcher').on('click', function() {
        if (!$(event.target).is('button')) {
            $('#switcher > button').toggleClass("hidden");
        }
    });
    
    $('#switcher-default').addClass("selected");
    $('#switcher').trigger('click');
    
    var setBodyStyle = function(style) {
        $('body').removeClass().addClass(style);
        $('#switcher button').removeClass();
        $('#switcher-'+style).addClass('selected');
    }
    
    $('#switcher button').on('click', function() {
        var bodyClass = $(this).attr("id").split('-')[1];
        setBodyStyle(bodyClass);
        i = styles.indexOf(bodyClass);
    });
    
    $(".author").on('click', function() {
        $(this).toggleClass('selected');
    });
    
    $(".chapter-title").on('dblclick', function() {
        $(this).nextAll().toggle();
    });
    
    $(document).on('keyup', function(event) {
        if (event.which === 39) {
            (i < styles.length-1) ? i++ : i = 0;
            setBodyStyle(styles[i]);
        }
        if (event.which === 37) {
            (i > 0) ? i-- : i = 2;
            setBodyStyle(styles[i]);
        }
    })
});