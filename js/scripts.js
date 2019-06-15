// /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
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



// $("#button").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });
