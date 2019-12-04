var chin = document.getElementsByClassName('Chinese');
var eng = document.getElementsByClassName('English');


function change_language(){
  if(chin.style.display == "block") {
    chin.classList.toggle("hidden");
    chin.style.visibility="visible";
    chin.style.display = "none";
    eng.style.display= "block";
  } else {
    chin.style.visibility="visible";
    chin.style.visibility="hidden";
    chin.style.display = "block";
    eng.style.display= "none";
  }
}
document.getElementsByClassName("trans_img").onclick = change_language()
