let isMobile = window.matchMedia("(any-pointer:coarse)").matches;
var fixFont = document.querySelector("#text") = isMobile.matches;

if (isMobile == true) {
    fixFont.style.fontSize = "11.5px";
}