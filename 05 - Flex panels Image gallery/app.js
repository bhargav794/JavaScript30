const panel = document.querySelectorAll(".panel");

function openFlex() {
    this.classList.toggle("open");
}
function openActive(e) {
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }

}
panel.forEach(x => x.addEventListener("click",openFlex));
panel.forEach(x => x.addEventListener("transitionend",openActive));
