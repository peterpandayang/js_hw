$(function() {
    $('#selected-plays > li').addClass('horizontal');
    $('ul > li > ul > li').addClass("sub-level");
    $('a[href^="mailto"]').addClass("mailto");
    $('a[href$=".pdf"]').addClass("pdflink");
    
    $('tr:nth-child(odd)').addClass("alt");
    //$('tr:contains("Henry")').addClass("highlight");
    $('td:contains("Henry")').nextAll().addClass("highlight");
    
    $('table:first td:nth-child(3)').addClass("year");
    $('ul > li > ul > li:has(a)').addClass("afterlink");
});