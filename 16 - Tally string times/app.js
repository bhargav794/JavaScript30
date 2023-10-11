const timeNode = [...document.querySelectorAll("[data-time]")];
const times = timeNode.map(timess => timess.dataset.time);

let totalInSecs = times.reduce((x,y) => {
    const [mins, secs] = y.split(":").map(parseFloat);
    return x += mins*60 + secs;
},0);

const hours = Math.floor(totalInSecs/3600);
const mins = Math.floor((totalInSecs%3600)/60);
totalInSecs = totalInSecs%60;

console.log(hours,mins,totalInSecs);



