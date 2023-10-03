const canvas = document.querySelector("#draw");
const clrBtn = document.querySelector(".clr");

const ctx = canvas.getContext("2d"); //All methods of canvas are applied to context

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;
let wid = true;

function draw(e) {
    if(!isDrawing) return;
    //console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY]; //Destructuring an Array ES6 
    hue++;
    if(hue >= 360){
        hue = 0;
    }
    if(ctx.lineWidth>300 || ctx.lineWidth<=1){
        wid = !wid; //whether wid is true or false it will be inverted.
    }
    if(wid){
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener("mousedown",(e) => {
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];

});
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseup",() => isDrawing =false);
canvas.addEventListener("mouseout",() => isDrawing = false);


//Event to clear the canvas.
clrBtn.addEventListener("click",() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.lineWidth = 1;
});


