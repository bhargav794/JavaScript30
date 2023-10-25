const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');

  let lastHole;
  let timeUp = false;
  let score = 0;


  function randomTime(min, max) {
    return Math.round(Math.random()* (max-min)+min);
  }

  function randomHoles(holes) {
    const idx = Math.floor(Math.random()*holes.length);
    const hole = holes[idx];

    if(hole === lastHole){
        return randomHoles(holes);
    }

    lastHole = hole;
    return hole;

  }

  function peep() {
    const time = randomTime(200,2000);
    const hole = randomHoles(holes);

    hole.classList.add("up");

    setTimeout(() => {
        hole.classList.remove("up");
        if(!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;

    score=0;
    peep();
    setTimeout(() => timeUp = true, 10000);
  }

  function bonk(e) {
    console.log(this.parentNode);
    if(!e.isTrusted) return; //istrusted is false when a click is simulated.

    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener("click",bonk));