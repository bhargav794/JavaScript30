const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
   return bandName.replace(/^(the |an |a )/i, "").trim();//regex method
   

   //you can also split the str to an array delete the first elem if it is a article and join the array back to string.
  /* let bandNames = bandName.split(" ")
   const arts = ["the","an","a"];
   if(arts.includes(bandNames[0].toLowerCase())){//.includes works for array too
    bandNames = bandNames.slice(1);
   }
   return bandNames.join(", ");*/
}
const bandsSort = bands.sort((a, b) => {
     
     return strip(a)>strip(b) ? 1 : -1;//instead of doing everything in one function you can break it to different functions
})

console.log(bandsSort);
const bandsId = document.querySelector("#bands");

    bandsId.innerHTML = 
    bandsSort
    .map(x =>  `<li>${x}</li>`)
    .join("");   

