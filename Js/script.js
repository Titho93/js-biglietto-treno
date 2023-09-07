/*
1. Esegui il prompt sul numero dei chilometri da percorrere e dell'età del passeggero
2.  Creare una costante con il prezzo del biglietto sui km inseriti  
3.  creare un if con uno sconto del 20% per i minori di 18 e uno per gli over 65
4.  L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
*/

const kilometres = parseInt(prompt('inserisci il numero dei chilometri'))
const age = parseInt(prompt('inserisci la tua età'))
let price = kilometres * 0.21 ;

if(age < 18){
  price = price - (20 / 100 * price) 
}else if(age > 65){
  price = price - (40 / 100 * price) 
} 

document.getElementById('output').innerHTML = price