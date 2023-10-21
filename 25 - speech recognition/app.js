

window.SpeechRecognition = window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector(".words");
let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
    const alternative = [...e.results].map(result => result[0]); //maps over the result to get the array inside

    const transcript = alternative[0].transcript; //write based on the data you are recieving

    p.textContent = transcript;
    if(e.results[0].isFinal){ // isFInal tells when user stops talking then we will create a new P and start in the new line.
        p = document.createElement("p");
        words.appendChild(p);
    }
    console.log(transcript);
})

recognition.addEventListener("end", recognition.start);
recognition.start();