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

