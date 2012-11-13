
$(window).resize(function(){

    $('.middle').css({
        position:'absolute',
        left: ($(window).width() - $('.className').outerWidth())/2,
        top: ($(window).height() - $('.className').outerHeight())/2
    });
 
});
 
// To initially run the function:
$(window).resize();
