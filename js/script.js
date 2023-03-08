// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// var km number
let kmNumber = prompt("Inserisci il numero di kilometri che vuoi percorrere");

// var passenger age
let userAge = prompt("Inserisci la tua età in numeri");

// const km price
const kmPrice = 0.21;

// underage discont

// senior discount

// var ticket price
let ticketPrice = (kmNumber * kmPrice);

// var underage ticket price


// var senior ticket price

// Ticket price appears in ticket div
if ((! isNaN(kmNumber) && ! isNaN(userAge))) {
    
    document.getElementById('ticket').innerHTML=
    `<strong>${ticketPrice}</strong>`;
}
// Error message if data chosen by user are not numbers
else{

    document.getElementById('ticket').innerHTML=
    `<p class="text-danger strong">I dati inseriti non sono validi</p>`;

}



   



    