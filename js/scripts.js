var y = true;

$("#myLinks").hide();
$("#burger").click(function() {
    if (y) {
    $("#myLinks").slideDown(200);
    y = false;
    } else {
    $("#myLinks").slideUp(300);
    y = true;
    }
});

$(".about-nav").click(function (){
    $('html, body').animate({
        scrollTop:$("#about").offset().top
    }, 1000);
});
$(".work-nav").click(function (){
    $('html, body').animate({
        scrollTop:$("#work").offset().top
    }, 1000);
});
$(".contact-nav").click(function (){
    $('html, body').animate({
        scrollTop:$("#contact").offset().top
    }, 1000);
});
