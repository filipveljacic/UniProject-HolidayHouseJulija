function menuOpenClose(icon) {
    icon.classList.toggle("openClose"); // CSS toggle, to switch between hamburger menu icon and 'X' icon
    var showMenu = document.getElementById("menu"); // For opening/closing the menu
    var hideScroll = document.getElementById("scrollbar"); // For hiding/showing content on the website when menu is open fullscreen or not

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
            hideScroll.style.display = "none"; // Hides website content behind the menu when browser window width is 1080px or less (and the menu is being displayed fullscreen). Results in no scrollbar next to the fullscreen menu.
        }
        else 
        {
            hideScroll.style.display = "initial"; // Returns website content to its initial properties
        }

        window.addEventListener('resize', function() // Checks for max-width when user is resizing the browser window while the menu is open. Hides or shows website content behind the menu.
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