$(window).scroll(function(){
    //Save Scroll From Top in a Variable
    var scrollFromTop=$(this).scrollTop();

    //Decision For Show or Hide Go To Top Button Base on Scroll From Top
    if(scrollFromTop>480){
        $('#goTopButton').css('display','inline');
        $('#topNavbar').css('margin-top','0');
        $('#topNavbar').addClass('sticky');
    }
    else{
        $('#goTopButton').css('display','none');
        $('#topNavbar').removeClass('sticky');
    }
});

$(document).ready(function(){

    //Code For When Go To Top Button Click
    $('#goTopButton').click(function(){
        $('html').animate({scrollTop:0},1000);
    });
});
