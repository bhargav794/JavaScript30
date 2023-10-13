const nav = document.querySelector("#main");
const navTop = nav.offsetTop;


function stickyNav() {
    if(window.scrollY > navTop) {
        document.body.classList.add("fixed-nav");
        document.body.style.paddingTop = nav.offsetHeight + 'px';

    }
    else{
        document.body.classList.remove("fixed-nav");
        document.body.style.paddingTop = 0;
    }
}
window.addEventListener("scroll", stickyNav)