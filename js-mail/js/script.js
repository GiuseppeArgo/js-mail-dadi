"use strict";

// Creo un array con la lista mail

const emails = ['utente1@example.com', 'utente2@example.com', 'utente3@example.com', 'utente4@example.com', 'utente5@example.com', 'utente6@example.com'];
console.log(emails);

// Creo una variabile d'appoggio

let accesso = false

// Creo un variabile per il bottone di verifica

const verificaMail = document.getElementById("verifica-mail");

verificaMail.addEventListener ("click" , function () {

    const userMail = document.getElementById("userMail").value;


    // Creo variabile per il risultato
    let result = "";

    // Creo ciclo for per controllare elementi array
    for (let i = 0; i < emails.length; i++) {
        
        if (userMail === emails [i]) {
            accesso = true;
        }
        
    }

    //Condizione di stampa

    if (accesso) {
        console.log("Accesso consentito");
        result = "Accesso consentito";

    } else { 
        console.log("Accesso negato");
        result = "Accesso negato";
    }


    document.getElementById("risultato").innerHTML = result;

});