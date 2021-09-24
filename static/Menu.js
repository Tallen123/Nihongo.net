window.onload = function() {
    var Menu = document.getElementById("Menu");
    var Side_Bar = document.getElementById("Side_Bar");

    var opened = false
    Side_Bar.style.pointerEvents = "none"
    Menu.onclick = function() {
        if (opened == false) {
            Menu.innerHTML = "Close";
            Side_Bar.style.animationName = "Side_Bar_anim";
            Side_Bar.style.animationDuration = "0.2s";
            Side_Bar.style.animationPlayState = "Running";
            Side_Bar.style.opacity = "100%"
            Side_Bar.style.pointerEvents = "auto"
            opened = true;
        } else if (opened == true) {
            Menu.innerHTML = "Menu";
            Side_Bar.style.animationName = "Side_Bar_anim_rev";
            Side_Bar.style.animationDuration = "0.5s";
            Side_Bar.style.animationPlayState = "Running";
            Side_Bar.style.opacity = "0%"
            Side_Bar.style.pointerEvents = "none"
            opened = false;
        }
    }
}