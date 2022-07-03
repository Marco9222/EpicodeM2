/* ESERCIZIO 1 OK
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let x = 1;
let y = 2;
if (x>y){
  console.log(x,"E' il numero più grande");
} else{
  console.log(y,"E' il numero più grande");
};*/

/* ESERCIZIO 2 OK
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let z = 3;
if(z!==5) {
  console.log("not equal");
  window.alert("E' inferiore");
};*/

/* ESERCIZIO 3 OK
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let a = 11;
if (a % 5 == 0) {
  console.log("divisible by 5");
  window.alert("E' divisibile per 5");
} else{
  console.log("Non è divisibile per 5");
  window.alert("Non è divisibile per 5");
}*/

/* ESERCIZIO 4 OK
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*let b = 0;
let c = 8;
if (b == 8 || c == 8 || b + c == 8 || b-c == 8 || c-b == 8){
  console.log("uno dei due è uguale a 8 o la loro somma/sottrazione è 8");
  window.alert("uno dei due è uguale a 8 o la loro somma/sottrazione è 8");
} else{
  window.alert("condizione non soddisfatta");
};*/

/* ESERCIZIO 5 OK
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let totalShoppingCart = 60;
let costoSpedizione = null;

if (totalShoppingCart > 50) {
  costoSpedizione = 0;
  window.alert("spedizione gratuita");
  console.log(totalShoppingCart);
} else {
  costoSpedizione = 10;
  window.alert("non hai diritto alla spedizione gratuita");
  console.log(totalShoppingCart + costoSpedizione);
};*/


/* ESERCIZIO 6 OK
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/

/*let totalShoppingCart = 80;
let costoSpedizione = null;
totalShoppingCart = totalShoppingCart * 4 / 5 //condizione black friday

if (totalShoppingCart > 50) {
  costoSpedizione = 0;
  window.alert("spedizione gratuita");
  console.log(totalShoppingCart);
} else {
  costoSpedizione = 10;
  window.alert("non hai diritto alla spedizione gratuita");
  console.log(totalShoppingCart + costoSpedizione);
};*/

/* ESERCIZIO 7 OK
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, 
  dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*let q = 5;
let w = 15;
let e = 2;*/

/*if (q > w && w > e) {
  console.log(q,w,e);
} else if (q > e && e > w) {
  console.log(q,e,w);
} else if (e > q && q > w) {
  console.log(e,q,w);
} else if (e > w && w > q) {
  console.log(e,w,q);
} else if (w > e && e > q) {
  console.log(w,e,q);
} else {
  console.log(w,q,e);
}*/

/* ESERCIZIO 8 OK
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*let r = 10.1;
if (Number.isInteger(r)){
  console.log("true");
} else {
  console.log("false")
};*/


/* ESERCIZIO 9 OK
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let t = 2;
if (t % 2 == 0){
  console.log("pari");
  window.alert("pari");
} else{
  console.log("dispari");
  window.alert("dispari");
};*/

/* ESERCIZIO 10 DUBBIO
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto
   in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*let val = 11;

  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val == 10) {
      console.log("Uguale a 10");
    } else {
      console.log("Maggiore di 10");
    }*/

/*
ESERCIZIO 11 OK
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*let num = 60;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15){
  console.log("Medium");
} else if (num < 20){
  console.log("Large");
} else {
  console.log("Huge");
};*/

/*  ESERCIZIO 12 OK
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/*let isMale = false;
let gender = isMale ? "male" : "female";*/

/* ESERCIZIO 13 OK
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/*let num = 0;
while (num <= 4){
  num++;
  console.log(num);
}*/

/* ESERCIZIO 14 OK
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/*for (let num = 0; num < 11; num++){
  console.log(num);
}*/

/* ESERCIZIO 15 DUBBI
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare
  i numeri 3 e 8.
*/

/*let num = 0;
while(num < 11){
  if(num == 3);
  console.log(num);
}*/

/* ESERCIZIO 16 OK
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*let num = 0;
while (num < 15) {
  num++;
  console.log(num);
  if (num % 2 == 0) {
    console.log("pari");
  } else {
    console.log("dispari");
  }
}*/

/* ESERCIZIO 17 OK
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e 
  se il numero è multiplo di 5, stampa "Buzz". 
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*let num = 0;
while (num < 100) {
  num++;
  console.log(num);
  if (num%5==0 && num%3==0){
    console.log("FizzBuzz");
  } else if(num%5==0){
    console.log("Buzz");
  } else if (num%3==0){
    console.log("Fizz");
  }
}*/

/* ESERCIZIO 18 OK
  Scrivi un algoritmo per controllare il giorno della settimana.
  Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; 
  se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/*let day = 5;
switch(day) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
  break;
  default:
    console.log("giorno");}
  */