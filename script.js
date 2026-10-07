document.addEventListener("DOMContentLoaded", function () {

    var menuButton = document.getElementById("menuButton");
    var navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

    var links = navMenu.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {

        links[i].addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    }

});