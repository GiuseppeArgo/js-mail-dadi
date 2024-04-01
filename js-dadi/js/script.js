"use strict";

// INPUT

// Creo le variabili per il numero giocatore e il numero computer

const playerNum = Math.floor(Math.random() * 6) + 1; //number
console.log(playerNum, typeof playerNum);  

const computerNum = Math.floor(Math.random() * 6) + 1; //number
console.log(computerNum, typeof computerNum);

// LOGICA 

// Creo la varibile result collegata ad un bottone

const generaRisultato = document.getElementById("genera-risultato")

generaRisultato.addEventListener("click", function() {

let result = ""; //stringa

if (playerNum > computerNum) {
    console.log("Player vince");
    result = "Player vince";
} else if (playerNum < computerNum ) {
    console.log("Computer vince");
    result = "Computer vince";
} else {
    console.log("Pareggio");
    result = "Pareggio"
}

document.getElementById("player").innerHTML = `Il tuo numero è ${playerNum}`

document.getElementById("computer").innerHTML = `Il numero del computer è ${computerNum}`


document.getElementById("game-result").innerHTML = result;

});
