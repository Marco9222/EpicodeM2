/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che 
non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, 
quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1 OK
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato.
*/

/*let l1 = 2;
let l2 = 3;
function area(l1,l2){
    return l1*l2;
}

console.log(area(l1,l2));*/

/* ESERCIZIO 2 OK
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, 
 ma se il loro valore è lo stesso allora deve ritornare 
 la loro somma moltiplicata per 3.
*/

/*let n1 = 2;
let n2 = 2;
function crazySum (n1,n2){
    if(n1 !== n2){
        return (n1+n2);
    } else if (n1 === n2){
        return (n1+n2)*3;
    }
};

console.log(crazySum(n1,n2));*/

/* ESERCIZIO 3 OK
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra 
 un numero fornito e 19.
 Se il valore calcolato è più grande di 19, 
 la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*let n1 = 15;
let n2 = 19;
function crazyDiff (n1,n2) {
        let diff = Math.abs(n1-n2);
        if(Math.abs(n1-n2)>19)
        return (diff*3); else {
            return Math.abs(n1-n2);
        }
};

console.log(crazyDiff(n1,n2));*/

/* ESERCIZIO 4 OK
 Scrivi una funzione chiamata "boundary", che accetta un numero intero
  come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) 
  o se è esattamente uguale a 400.
*/

/*let n1 = 20;
function boundary (n1){
    if((n1>=20 && n1<=100)||(n1 == 400))
    return true;
    else{
    return "Fuori limite";}
};

console.log(boundary(n1));*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita 
 e ritornare il risultato, ma se la stringa fornita comincia proprio 
 con "code" allora deve ritornarla senza modifiche.
*/

/*let n1 = "code";
function codify(n1){
    if(n1.slice(0,4) === "code")
    return n1; else {
        return ("code"+n1);}
};

console.log(codify(n1));*/

/* ESERCIZIO 6 OK
 Scrivi una funzione chiamata "check3and7" la quale accetta 
 un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, 
 e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*let n1 = 0.3;
function check3and7 (n1){
    if (n1<0 || !Number.isInteger(n1))
    return "ERRORE";
    else if(n1%3 == 0 || n1%7 == 0)
    return true;
    else{
    return false;
    }
};

console.log(check3and7(n1));*/

/* ESERCIZIO 7 OK
 Scrivi una funzione chiamata "reverseString", 
 che accetta una stringa come parametro 
 e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*let n1 = "stringa";
function reverseString (n1){
    var splitn1 = n1.split("");
    var reverseArray = splitn1.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
};

console.log(reverseString(n1));*/

/* ESERCIZIO 8 OK
 Scrivi una funzione chiamata "upperFirst", 
 che accetta una stringa come parametro 
 e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*let n1 = "ciao";
function upperFirst (n1){
    let maiusc = (n1.charAt(0).toUpperCase() + n1.slice(1));
    return maiusc;
};

console.log(upperFirst(n1));*/

/* ESERCIZIO 9 OK
 Scrivi una funzione chiamata "cutString", che accetta 
 una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*let n1 = "computer";
function cutString (n1){
    let splitn1 = n1.split("");
    let splitn2 = splitn1.slice(1,-1);
    let join = splitn2.join("");
    return join;
};

console.log(cutString(n1));*/

/* ESERCIZIO 10 DUBBI
 Scrivi una funzione chiamata "giveMeRandom", 
 che accetta come parametro un numero chiamato n 
 e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*let n = 8;
function giveMeRandom (n){
    let foo = [];
    for (let i = Math.floor(Math.random() * 11); foo.length < n;) {
           foo.push(i);
        }
        foo.length = n;
    return foo;
};

console.log(giveMeRandom(n));

let n = 8;
for (let i=0;i++;i<n){
    let arr = [];
    arr = arr[i];
}*/