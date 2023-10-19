const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");


function handleSlide(e) {

    const y = e.pageY - this.offsetTop
    const percent = (y/this.offsetHeight);

    const min = 0.4;
    const max = 4;

    const height = Math.round(percent*100);
    speedBar.style.height = height  + "%";
    speedBar.style.transition = "all 0.1s";
    

    const playBackRate = (percent*(max-min))+min;
    speedBar.innerHTML = playBackRate.toFixed(2) + "x";
    video.playbackRate = playBackRate;
}

speed.addEventListener("mousemove",handleSlide);