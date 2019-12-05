// var chin = document.getElementsByClassName('Chinese');
// var eng = document.getElementsByClassName('English');
// var chinStyle = window.getComputedStyle(chin[1]);
// var engStyle = window.getComputedStyle(eng[1]);
//
// // function change_language(){
// //   if(chinStyle.getPropertyValue("display") == "flex") {
// //     chin.classList.toggle("hidden");
// //     chin.style.visibility="visible";
// //     chin.style.display = "none";
// //     eng.style.display= "flex";
// //   } else {
// //     chin.style.visibility="visible";
// //     chin.style.visibility="hidden";
// //     chin.style.display = "flex";
// //     eng.style.display= "none";
// //   }
// // }
//
// document.getElementsByClassName("trans_img").onclick = change_language()

$(document).ready(function() {
  $(".trans_img").click(function(e) {
    var display = $(".Chinese").css("display");
    if (display == "flex") {
      $(".Chinese").css("visibility", "hidden");
      $(".Chinese").css("visibility", "visible");
      $(".Chinese").css("display", "none");
      $(".English").css("display", "flex");
    } else {
      $(".Chinese").css("visibility", "hidden");
      $(".Chinese").css("visibility", "visible");
      $(".Chinese").css("display", "flex");
      $(".English").css("display", "none");
    }
  })
})
