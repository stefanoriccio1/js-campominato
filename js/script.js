// Il computer deve generare 16 numeri casuali da 1 a 100.
//
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var elencoNumeriPc = [];
var tentativiUtente = [];
var tentativiMassimi = 84;

while (elencoNumeriPc.length < 16){
  var numeroRandom = numeriPc (1, 100);
  if (elencoNumeriPc.includes(numeroRandom) == false){
    elencoNumeriPc.push(numeroRandom);
  }
}

console.log(elencoNumeriPc);

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

function controlloNumeri (arrayDaControllare, numero) {
  var risulato = false;
  if (numero == arrayDaControllare){
    risultato = true;
    return risulato;
  }
  return risultato;
}











// while (tentativiUtente.length < tentativiMassimi && controlloRisultato(elencoNumeriPc, numeroUtente) == false){
//   var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 100'));
//   if (){
//
//   }
  // controllo non sia una bomba
  // controllo che il numero non sia già stato dato dall'utente


//
// }

// var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 100'));
//
// var i =0;
// while (i<84){
//   if (numeroUtente == elencoNumeriPc){
//     alert('spiacente, hai perso');
//   }
//   else if (numeroUtente != elencoNumeriPc) {
//     numeroUtente = parseInt(prompt('inserisci un altro numero da 1 a 100'));
//   }
//   else {
//     alert('alla gande! Hai vinto!');
//   }
//   i++;
//   console.log(numeroUtente);
// }
//
// var risultato = [];
// risultato.push(numeroUtente);


// funzioni
function numeriPc (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

// funzione di controllo risultato
function controlloRisultato(arrayDaControllare, numeroDaControllare){
  for (var i = 0; i < arrayDaControllare.length; i++) {
    if (numeroDaControllare == arrayDaControllare[i]){
      return true;
    }
  }
  return false;
}
