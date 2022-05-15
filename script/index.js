let navbar = document.querySelector('.navbar__frame-right');
let btnOpenMenu = document.querySelector('.bar');
let headerBaner = document.querySelector(".text-content");

function openCloseMenu() {
    navbar.classList.toggle('hidden');
    for (let i = 0; i < headerBaner.children.length; i++){
        if (
          headerBaner.children[i].tagName == "H1" ||
          headerBaner.children[i].tagName == "H4"
        ) {
          headerBaner.children[i].classList.toggle("opacity");
        }
  

    }
    // navbar.style.top = 0;
};

btnOpenMenu.addEventListener("click", openCloseMenu);