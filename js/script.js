// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR

// RAGIONAMENTO
// Creo una funzione per verificare se una parola è palindroma e gli assegno un parametro
// Con ciclo for controllo lettera per lettera la parola fino a metà, per verificare se una parola è palindroma bisogna verificarne entrambi i lati e mettere a confronto le lettere opposte
// Con return esci dal ciclo e scrivi true se è palindroma o false se non lo è
// Usiamo un prompt per chiedere la parola all'utente e stampiamo il risultato con il log inserendo la parola dell'utente all'interno della funzione che verifica se la parola è palindroma

function isPalindroma(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let userWord = prompt("Inserisci una parola");

if (isPalindroma(userWord)) {
  console.log("Si, è palindroma");
} else {
  console.log("No, non è palindroma");
}

