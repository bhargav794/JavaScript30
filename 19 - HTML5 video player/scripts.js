/**Get the elements */
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const videoEnded = document.querySelector(".progress__filled");
const pause = document.querySelector(".toggle");
const sliders = document.querySelectorAll(".player__slider");
const skipBtns = document.querySelectorAll("[data-skip]");

/**Build the functions */

/**for pause play**/
function togglePlay() {
    //(video.paused) ? video.play() : video.pause(); this is a general way of doing it

    const method = (video.paused) ? 'play' : 'pause';
    video[method]();
}

function updatePauseIcon() {
    const icon = (this.paused) ? "►" : "⏸";
    pause.innerHTML = icon;
}
/**End pause play**/

/**for skip forward & backward */
function skip() {
    console.log(typeof this.dataset.skip); //check its type before you apply operations on it

     video.currentTime += parseFloat(this.dataset.skip);
    console.log(video.currentTime);

}
/**End skip forward & backward */

/**for sliders */
let isMoving = false;
function moveSliders() {
    if(!isMoving) return;
    video[this.name] = this.value; //access attributes of a html element 
}
/**End sliders */

/**for progress bar update */

function handleProgress() {
    const percent = (video.currentTime/video.duration)*100;
    //console.log(percent);
    videoEnded.style.flexBasis = `${percent}%`;
}
/**End progress bar update */

/**for progress bar update on click */
function scrub(e) {
    const scrubTime = (e.offsetX/progress.offsetWidth);
    video.currentTime = (scrubTime*video.duration);
}



/**Hook the event listeners */

pause.addEventListener("click",togglePlay);
video.addEventListener("click",togglePlay);
video.addEventListener("play",updatePauseIcon);
video.addEventListener("pause",updatePauseIcon);

skipBtns.forEach(skipBtn => {
    skipBtn.addEventListener("click",skip);
})

sliders.forEach(slider => {
    slider.addEventListener("change", moveSliders);
    slider.addEventListener("mousedown", () => isMoving = true);
    slider.addEventListener("mouseup", () => isMoving = false);
    slider.addEventListener("mouseout", () => isMoving = false);

    slider.addEventListener("mousemove", moveSliders);

});

video.addEventListener("timeupdate",handleProgress);

let mousedown = false;
progress.addEventListener("click",scrub);
progress.addEventListener("mousemove",(e) => mousedown && scrub(e));
progress.addEventListener("mousedown",() => mousedown = true);
progress.addEventListener("mouseup",() => mousedown = false);



