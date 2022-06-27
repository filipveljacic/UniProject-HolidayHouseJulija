function menuOpenClose(icon) {
    icon.classList.toggle("openClose");

    var showMenu = document.getElementById("menu"); //for opening/closing the menu
    var hideScroll = document.getElementById("scrollbar"); //for hiding/showing content on the website when menu is open (to remove scrollbar)

    if (showMenu.style.display == "flex")
    {
        showMenu.style.display = "none";
        hideScroll.style.display = "initial";
    }
    else
    {
        showMenu.style.display = "flex";

        if (window.matchMedia("(max-width: 1080px)").matches) 
        {
            hideScroll.style.display = "none";
        }
        else 
        {
            hideScroll.style.display = "initial";
        }

        window.addEventListener('resize', function() 
        {
            if (window.matchMedia("(max-width: 1080px)").matches && showMenu.style.display == "flex") 
            {
                hideScroll.style.display = "none";
            }
            else {
                hideScroll.style.display = "initial";
            }
        })
    }
}