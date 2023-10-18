const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;
    //console.log(startX, scrollLeft,  offX,e,e.x);
    slider.classList.add("active");

})
slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");


})
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");


})
slider.addEventListener("mousemove", (e) => {
    if(!isDown) return;

    const x =   e.pageX - slider.offsetLeft;
    const walk = x - startX;

    slider.scrollLeft = scrollLeft -walk;

    console.log({x,startX,scrollLeft, walk},slider.scrollLeft);

})





