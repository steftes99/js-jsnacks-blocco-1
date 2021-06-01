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