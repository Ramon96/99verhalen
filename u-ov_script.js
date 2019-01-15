var filterMenu = document.querySelector("aside");
var filterOpen = false;
var bookmarkButton = document.getElementsByClassName("bookmarkButton");

document.getElementById("filter").addEventListener("click", toggleFilter);
document.getElementById("overlay").addEventListener("click", toggleFilter);


for (var i = 0; i < bookmarkButton.length; i++) {
    bookmarkButton[i].addEventListener("click", bookmark);
}

function toggleFilter() {
    if(window.innerWidth < 960){
        if(!filterOpen)
        {
            document.getElementById("overlay").style.opacity = "1";
            filterMenu.style.transform = "translate(0%,-50%)"
            document.getElementById("overlay").style['pointer-events']  = "initial";


            filterOpen = true;
        }
        else if(filterOpen)
        {
            document.getElementById("overlay").style.opacity = "0";
            filterMenu.style.transform = "translate(-100%,-50%)"
            document.getElementById("overlay").style['pointer-events']  = "none";

            filterOpen = false;
        }
    }
}

function bookmark(){
    if(this.classList.contains('bookmarked'))
    {
        this.classList.remove('bookmarked');
    }
    else{
        this.classList.add('bookmarked');
    }

}