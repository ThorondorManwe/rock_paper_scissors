const container = document.querySelector('#container');

/* Añadir un div para mostrar los resultados */
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div'); 
// create a new div referenced in the variable 'div'

div.style.cssText = 'color: blue; background: white'; 
div2.style.cssText = 'color: blue; background: white';
div3.style.cssText = 'color: blue; background: white';
// adds several style rules

let jugador = 0;
let comp = 0;
let puntos = 0;

let juego = 0;
// Crea una función que hace una elección aleatoria de 'Rock', 'paper', 'scissor'
function computerPlay() {
  let ele = Math.floor(Math.random() * (4 - 1)) + 1;
  let elije = "";

  if (ele == 1) {
    elije = "rock"
  } else if (ele == 2) {
    elije = "paper"
  } else {
    elije = "scissors"
  }
  return elije;
}

//  una función que "juege" una ronda de piedra, papel o tijeras.
function playRound(playerSelection, computerSelection) {
  /* let input = prompt("Choose, 'rock', 'paper, or 'scissors': "); */
  let resultado = "";
  //convertir input a minus para que sea case insensitive
  /* playerSelection = input.toLowerCase(); */
  
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    resultado = "Empate";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {            // Si el player elije rock
    resultado = "Tú ganas, rock vence a scissors";
    jugador += 1;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    resultado = "Gana el computer, papel le gana a rock";
    comp += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {               // Si el player elije paper
    resultado = "Tú ganas, papel vence a rock";
    jugador += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    resultado = "Pierdes, tijeras vence a papel";
    comp += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {           // Si el player elije tijeras
    resultado = "Tú ganas, tijera vence papel";
    jugador += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    resultado = "Pierdes, rock vence a tijeras";
    comp += 1;
  }

  console.log(`El player eligió ${playerSelection}`);
  div.textContent = `El player eligió ${playerSelection}`;
  container.appendChild(div);
  console.log(`El computer eligió ${computerSelection}`);
  div2.textContent = `El computer eligió ${computerSelection}`;
  container.appendChild(div2);
  console.log(`El resultado es: ${resultado}`);
  div3.textContent = `El resultado es: ${resultado}`;
  container.appendChild(div3);

  return resultado;
}

// Una función que haga un loop de 5 rondas y tenga el contol del score
function game() {
  /* for (let i =  1; i < 6; i++) {
    console.log(i);
    playRound();
  } */

  if (jugador === comp) {
    score = "Empate";
  } else if (jugador > comp) {
    score = "Jugador";
  } else {
    score = "Computer";
  }

  alert(`¡El resultado del juego es: ${score}`);
}

/* Seleccionar los botones*/
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        /* console.log(button.id); */
        /* console.log(e.target); */
        /* console.log(selection +"yeah"); */
        selection = button.id;
        juego += 1;
        playRound(selection);
        if(juego >= 5) {
            /* alert('Se acabó!');
            juego = 0; */
            game();
            juego = 0;
        }

    });
});

