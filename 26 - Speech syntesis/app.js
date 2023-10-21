const msg = new SpeechSynthesisUtterance();
const options = document.querySelectorAll('[name = "text"], [type = "range"]');
const voiceDropdown = document.querySelector('[name = "voice"]');
const stops = document.querySelector("#stop");
const speak = document.querySelector("#speak");
let voices = [];
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();

 voiceDropdown.innerHTML += voices
 .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
 .join('');
}

function speaks() {
    msg.voice = voices.find(voice =>  voice.name === this.value);
    toggle();
}

function toggle(startOver= true){
    speechSynthesis.cancel();
    if(startOver && msg.voice != null){
        speechSynthesis.speak(msg);
    }
}

function setOptions() {
    console.log(this.name,this.value);
    msg[this.name] = this.value;
    toggle();
}



speechSynthesis.addEventListener("voiceschanged",populateVoices);
voiceDropdown.addEventListener("change",speaks);
speak.addEventListener("click",toggle);
stops.addEventListener("click",() => toggle(false));

options.forEach(option => option.addEventListener("change",setOptions));

