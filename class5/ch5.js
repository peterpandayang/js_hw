$(function() {
    $('div.chapter a[href^="http"]').addClass('external').attr('target', '_blank');
    $('<a class="top">back to top</a>').insertAfter('div.chapter p:gt(2)');
    $('a.top').on('click', function() {
        $('body').animate({
            scrollTop: 0
        }, 'slow');
    });
    
    var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
    $('span.footnote').each(function(index) {
        var link = $('<a></a>').attr('href', '#footnote-'+(index+1)).append($('<sup></sup>').text(index+1));
        $(this).before(link);
        
        $(this).appendTo($notes).wrap('<li id="footnote-' + (index+1) + '"></li>');
    });
});