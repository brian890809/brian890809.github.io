var chin = document.getElementsByClassName('Chinese');
var eng = document.getElementsByClassName('English');


function change_language(){
  if(chin.style.display == "block") {
    chin.style.display = "none";
    eng.style.display= "block";
  } else {
    chin.style.display = "block";
    eng.style.display= "none";
  }
}
document.getElementsByClassName("trans_img").onclick = change_language()
