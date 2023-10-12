const allLinks = document.querySelectorAll("a");
const mySpan = document.createElement("span");
document.body.append(mySpan);




function highlightLink() {
    mySpan.classList.add("highlight");
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    }
    mySpan.style.width = `${coords.width}px`;
    mySpan.style.height = `${coords.height}px`;
    mySpan.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

 

allLinks.forEach(link => link.addEventListener("mouseenter",highlightLink));
