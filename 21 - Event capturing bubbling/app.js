const divs = document.querySelectorAll("div");
const btn = document.querySelector("button");


function logText(e) {
   e.stopPropagation();  //Stops bubbling
    console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener("click",logText,{
    capture:false,
    once: true
}));

btn.addEventListener("click", e => {
    console.log("clicked")
},{
    once: true
})