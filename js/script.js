// Esercizio1
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe.
var parola1 = prompt('Inserisci una parola');
var parola2 = prompt('Inserisci una seconda parola');

if(parola1.length > parola2.length){
    document.getElementById('stampa1').innerHTML = parola2;
    document.getElementById('stampa2').innerHTML = parola1;
} else if(parola1.length < parola2.length){
    document.getElementById('stampa1').innerHTML = parola1;
    document.getElementById('stampa2').innerHTML = parola2;

} else {
    document.getElementById('stampa1').innerHTML = 'sono uguali';
}

// Esercizio2
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
var somma = 0;
var i = 0;

for (var i = 0; i < 5; i++){
    var numero = parseInt(prompt('Inserisci un numero'));
    somma += numero;
}
document.getElementById('risultato').innerHTML = somma;

while(i < 5);{
    var numero = parseInt(prompt('Inserisci un numero'));
    somma += numero;
    i++;
}
document.getElementById('risultato-2').innerHTML = somma;

// Esercizio3
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
var numeri = [];

for(var i = 0; i < 6; i++){
    var cifra = parseInt(prompt('Inserisci un numero'));
    if(cifra % 2 != 0){
        numeri.push(cifra);
    }
}
document.getElementById('esercizio3').innerHTML = numeri;

// Esercizio4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var invitati = ['pippo', 'topolino', 'pluto', 'paperino', 'supermario'];

var utente = prompt('Controlla se sei invitato, scrivi il tuo nome');

if(invitati.includes(utente)){
    document.getElementById('esercizio4').innerHTML = 'Sei invitato!'
} else {
    document.getElementById('esercizio4').innerHTML = 'Mi dispiace, non sei invitato'
}
