$(function(){
    $('.sub').mouseover(function(){
     var $thisImg = $(this).attr('src');
     $('.main').attr({src:$thisImg});
    });
    $('.sub').mouseover(function(){
        $(this).css("opacity", "1");
    $('.sub').mouseleave(function(){
        $(this).css("opacity", "0.5");
    })
    });
});
