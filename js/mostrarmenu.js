    function mostrarMenu() {
        var menu = document.getElementById("menu-header");
        var icone = document.getElementById("icone-menu");

        if (getComputedStyle(menu).display =='none') {
            menu.style.display = "flex";
            icone.classList.remove("fa-bars");
            icone.classList.add("fa-times");
            // mudando para fa-times [icone x ]
        } else {
            menu.style.display = "none";
            icone.classList.remove("fa-times");
            icone.classList.add("fa-bars");

        }

    }