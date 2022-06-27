let isMobile = window.matchMedia("(any-pointer:coarse)").matches;
var fixFont = document.getElementById("text");

if (isMobile == true) {
    fixFont.style.fontSize = "11.5px";
}