alert("SIR RHEY, YOU SHOULD NOT STOP LEARNING");

// delphi programming blinking
var blink=
document.getElementById('logo');
setInterval(function (){;
    blink.style.opacity=
    (blink.style.opacity== 0 ? 1 : 0);
}, 700);

// Navigation bar script

var navi = document.getElementById("nav");
var navis = navi.getElementsByClassName("navi");
for (var i = 0; i < navis.length; i++) {
navis[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
// if there's no active link //

if (current.length > 0) {
    current[0].className = current[0].className.replace(" active","");}
    this.className += " active";
//If there's active link //

});
}