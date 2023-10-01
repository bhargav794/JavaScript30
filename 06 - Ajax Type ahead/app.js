const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(blob => blob.json()) //resolve response from the link and gets JSON data object
.then(data => cities.push(...data));//Uses JSON data and pushes it into an array //Spread operator ES6 syntax

function wordMatching(inputWord,cities){
     const res = cities.filter(place => {
        //console.log(place);
        const regex = new RegExp(inputWord, "gi");
       return place.city.match(regex) || place.state.match(regex);   //By using regex we can elimainate the need to iterate through entire array     
    })

    return res;
}
function displayMatches() {
    const ansArray = wordMatching(this.value,cities);
    const html = ansArray.map(place => {
        const regex = new RegExp(this.value,"gi"); //Creation of new Regex
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
        <li>
        <span class = "name">${cityName},${stateName}</span>
        <span class = "name">${place.population}</span>
        </li>
        `//HTML in JS
    }).join("");
    suggestions.innerHTML = html;
}

const searchValue = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchValue.addEventListener("change",displayMatches);
searchValue.addEventListener("keyup",displayMatches);
