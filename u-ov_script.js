var filterMenu = document.querySelector("aside");
var filterOpen = false;
var bookmarkButton = document.getElementsByClassName("bookmarkButton");
var bookmarkMicro = document.getElementsByClassName("micro");
var verhaalMicro = document.getElementById("verhaalMicro");
var microStep = 0;
var ratingButtons = document.getElementsByClassName("rating");

for (var i = 0; i < bookmarkButton.length; i++) {
    bookmarkButton[i].addEventListener("click", bookmark);
}

window.onscroll = function (e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById("review").style.opacity = "1";
    }
}



// ik hoef geen event listeners op elementen die niet aanwezig zijn op de pagina
if (document.querySelector("aside") !== null) {
    window.addEventListener("resize", responsiveCheck);
}

if (document.getElementById("overlay") !== null) {
    document.getElementById("overlay").addEventListener("click", toggleFilter);
}

if (document.getElementById("filter") !== null) {
    document.getElementById("filter").addEventListener("click", toggleFilter);
}

if (document.getElementById("loadingbar") !== null) {
    document.getElementById("loadingbar").addEventListener("animationend", showContent);
}


function responsiveCheck() {
    if (window.innerWidth >= 960) {

        filterMenu.style.transform = "initial";
    } else if (window.innerWidth < 960) {
        if (!filterOpen) {
            filterMenu.style.transform = "translate(-100%, -50%)";
        } else {
            filterMenu.style.transform = "translate(0%,-50%)"
        }
    }
}

function toggleFilter() {
    if (window.innerWidth < 960) {
        if (!filterOpen) {
            document.getElementById("overlay").style.opacity = "1";
            filterMenu.style.transform = "translate(0%,-50%)"
            document.getElementById("overlay").style['pointer-events'] = "initial";


            filterOpen = true;
        } else if (filterOpen) {
            document.getElementById("overlay").style.opacity = "0";
            filterMenu.style.transform = "translate(-100%,-50%)"
            document.getElementById("overlay").style['pointer-events'] = "none";

            filterOpen = false;
        }
    }

}

function bookmark() {
    if (this.classList.contains('bookmarked')) {
        this.classList.remove('bookmarked');
        for (var i = 0; i < bookmarkMicro.length; i++) {
            bookmarkMicro[i].classList.remove("spinAnim");
        }
        document.getElementsByTagName("ul")[1].classList.remove("notify");
    } else {
        this.classList.add('bookmarked');

        for (var i = 0; i < bookmarkMicro.length; i++) {
            bookmarkMicro[i].classList.add("spinAnim");
        }
        document.getElementsByTagName("ul")[1].classList.add("notify");


    }

}

function showContent() {
    document.getElementById("loadingbar").style.display = "none";
    for (var i = 0; i < document.getElementsByTagName("article").length; i++) {
        document.getElementsByTagName("article")[i].style.opacity = "1";

    }
}


// if (document.getElementById("verhaalMicro") !== null) {
//     document.getElementById("verhaalMicro").addEventListener("click", rateVerhaal);
// }

document.getElementById("verhaalMicro").onclick = function () {

    if (microStep == 0) {
        microStep = 1;
    } else if (microStep >= 1) {
        microStep = 0;
    }

    rateVerhaal();
}

document.getElementById("like").onclick = function () {
    if (microStep == 1) {
        microStep = 2;
    } else if (microStep == 2) {
        microStep = 1;
    }
    rateVerhaal();
}

document.getElementById("dislike").onclick = function () {
    if (microStep == 1) {
        microStep = 3;
    } else if (microStep == 3) {
        microStep = 1;
    }

    rateVerhaal();
}

function rateVerhaal() {


    switch (microStep) {
        case 0:
            for (var i = 0; i < ratingButtons.length; i++) {
                ratingButtons[i].style.display = "none";
            }
            document.getElementById("like").classList.remove("groen");
            document.getElementById("dislike").classList.remove("rood");
            break;
        case 1:
            for (var i = 0; i < ratingButtons.length; i++) {
                ratingButtons[i].style.display = "inline";
            }
            document.getElementById("like").classList.remove("groen");
            document.getElementById("dislike").classList.remove("rood");
            break;
        case 2:
            document.getElementById("like").classList.add("groen");
            document.getElementById("dislike").classList.remove("rood");
            document.getElementById("aanbevolen").style.display = "grid";
            break;
        case 3:
            document.getElementById("dislike").classList.add("rood");
            document.getElementById("like").classList.remove("groen");
            break;
        default:
            // document.getElementById("like").classList.remove("groen");
            break;
    }
}