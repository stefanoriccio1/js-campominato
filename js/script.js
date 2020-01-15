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


var i = 0;
while (i< tentativiMassimi && (controlloNumeri(elencoNumeriPc, numeroUtente) == false)){
  var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
  while (controlloNumeri(tentativiUtente, numeroUtente) == true){
   numeroUtente = parseInt(prompt('hai già inserito questo numero'));
  }
  if (controlloNumeri(tentativiUtente, numeroUtente) == false){
    tentativiUtente.push(numeroUtente);
    console.log(tentativiUtente);
  }
  if (controlloNumeri(elencoNumeriPc, numeroUtente) == true){
    alert('hai perso!' + ' il tuo punteggio è ' + '');
  }
 i++;
}



// funzioni
function numeriPc (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

// funzione di controllo risultato
function controlloNumeri (arrayDaControllare, numero) {
var i = 0;
var risultato = false
while (i<arrayDaControllare.length && risultato == false){
  if(numero == arrayDaControllare [i]){
      risultato = true;
    }
    i++;
  }
   return risultato;
}
