/*
1. Esegui il prompt sul numero dei chilometri da percorrere e dell'età del passeggero
2.  Creare una costante con il prezzo del biglietto sui km inseriti  
3.  
4.  Va applicato uno sconto del 20% per i minorenni
5.  Va applicato uno sconto del 40% per gli over 65.
6.  L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
*/

const kilometres = parseInt(prompt('inserisci il numero dei chilometri'))
const age = parseInt(prompt('inserisci la tua età'))

const price = kilometres * 0.21 ;

