// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// RAGIONAMENTO
// Tramite prompt chiediamo all'utente di scegliere se la somma sarà pari o dispari
// Tramite un secondo prompt chiediamo all'utente un numero da 1 a 5
// Generiamo un numero casuale per il computer sempre da 1 a 5
// Sommiamo i due numeri e tramite una funzione definiamo se il risultato è pari o dispari
// Definiamo chi ha vinto stampando in log

let userChoice = prompt("Scegli se pari o dispari");

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

function randomPcNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

let pcNumber = randomPcNumber();
console.log("Il numero del PC è:", pcNumber);

let somma = userNumber + pcNumber;
console.log("La somma è:", somma);

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

let result = evenOrOdd(somma);
console.log("La somma è:", result);

if (userChoice === result) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
    
}