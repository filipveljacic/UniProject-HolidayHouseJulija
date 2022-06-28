function fixer(fixFont){
    if (fixFont.matches) {
        document.getElementById("text").style.fontSize = "11.5px";
    }
}

const fixFont = window.matchMedia("(any-pointer:coarse)")
fixer(fixFont);