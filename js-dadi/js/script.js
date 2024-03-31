// INPUT

// Creo le variabili per il numero giocatore e il numero computer

const playerNum = Math.floor(Math.random() * 6) + 1; //number
console.log(playerNum, typeof playerNum);  

const computerNum = Math.floor(Math.random() * 6) + 1; //number
console.log(computerNum, typeof computerNum);

// LOGICA 

// Creo la varibile result

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