const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    navigator.mediaDevices.getUserMedia({ video:true, audio:false })
        .then(localStreamObj => {
            console.log(localStreamObj);
        video.srcObject = localStreamObj
            video.play();
        })
        .catch(err => {
            console.error("Error: ", err);
        })
}


function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    return setInterval( () => {
        ctx.drawImage(video, 0, 0, width, height);

        //creating effects
        const pixels = ctx.getImageData(0,0,width,height);
        console.log(pixels);

        redEffect(pixels);

       // ctx.putImageData(pixels,0,0);
        //debugger;
    },16);

}


function redEffect(pix) {
    for(let i =0; i<pix.data.length; i += 4){
        pix.data[i+0] = pix.data[i + 0] + 200;
        pix.data[i+1] = pix.data[i + 1] - 100;
        pix.data[i+2] = pix.data[i + 2] * 0.5;
    }
}

function takePhoto() {
    //play the sound whenever a photo is clicked
    snap.currentTime = 0
    snap.play();

    //getting and placing the photo

    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','img');
    link.innerHTML = `<img src = ${data} alt="image" />`;
    strip.insertBefore(link,strip.firstChild);

}
getVideo();

video.addEventListener("canplay",paintToCanvas);