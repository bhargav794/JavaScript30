const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;


hero.addEventListener("mousemove", handleShadow);

function handleShadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
        x  = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const walkX  = x/width*walk - walk/2;
    const walkY  = y/height*walk - walk/2;

    console.log(walkX,walkY)
    text.style.textShadow = `
    ${walkX}px ${walkY}px 0 rgba(77, 255, 0, 0.7),
    ${walkX*-1}px ${walkY}px 0 rgba(0, 255, 119,0.7),
    ${walkY}px ${walkX}px 0 rgba(41, 162, 255,0.7),
    ${walkY*-1}px ${walkX}px 0 rgba(255, 0, 98,0.7)
    `
}
