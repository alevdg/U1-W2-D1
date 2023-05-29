/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*I principali datatype in JS sono: stringhe,numeri,booleani,null e undefined.*/
console.log('I principali datatype in JS sono: stringhe,numeri,booleani,null e undefined.')

//Le stringhe sono una serie di lettere e sono scritti all'interno di apici//
let frutto = "Mela" //è una stringa
console.log('Le stringhe sono una serie di lettere e sono scritti all interno di apici')
console.log('Esempdio di stringa:',frutto)

//I numeri come 1,2,3  posssono esseri scritto con o senza decimali//
let number1 = 1 //numero senza decimali
let number2 = 1.10 //numero con decimali
console.log('I numeri come 1,2,3  posssono esseri scritto con o senza decimali')
console.log('Esempio numeri senza decimali:',number1)
console.log('Esempio numeri con decimali:',number2)

/*Il booleano è una parola speciale che ci aiuta a rispondere a domande solo con 'si' e 'no'. Come per esempio 'Il mare è blu?',posso risponderti con 'si è blu' o 'no, non è blu' 
E' come accendere il telecomando della tv con i tasti 'on' e 'off'.*/
let numberx= 10
let numbery=15

let maggioreMinore= numberx > numbery // Output : Falso
//let maggioreMinore= numberx < numbery //Output : Vero//

console.log("Il booleano è una parola speciale che ci aiuta a rispondere a domande solo con 'si' e 'no'. Come per esempio 'Il mare è blu?',posso risponderti con 'si è blu' o 'no, non è blu'.E' come accendere il telecomando della tv con i tasti 'on' e 'off'")
console.log('Esempio boolean:',maggioreMinore)

/* il datatype Undefined è quando la variabile non è definita; per esempio come un regalo non non sappiamo cosa c'è al suo interno*/
let regalo
console.log("'il datatype Undefined è quando la variabile non è definita; per esempio come un regalo non non sappiamo cosa c'è al suo interno'")
console.log('esempio undefined:',regalo)

/* il datatype Null è quando la variabile è "vuota", per esempio all'interno di un regalo non è presente nessun oggetto*/
let regalo1=null
console.log('il datatype Null è quando la variabile è "vuota", per esempio all interno di un regalo non è presente nessun oggetto')
console.log("esempio null", regalo1)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "John"
console.log('Nome;',name1)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numberA=12
let numberB=20

let numberAB= numberA + numberB

console.log("Numero a:",numberA)
console.log("Numero b:",numberB)
console.log("Somma numeri a e b:",numberAB)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log('x:',x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
name1='Smith'
console.log('Nuovo nome:',name1)

const name3 = 'John'
console.log('Nome:',name3)

name3='Maria'
console.log('Il mio nuovo nome:',name3)//andrà in errore perchè la variabile const è univoca e non può essere alterata


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4

let yMinusX= y - x

console.log("valore y:",y)
console.log("valore x:",x)
console.log("sottrazione y - x",yMinusX)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* li chiameero nameA e nameB perchè ho gia utilizzato name1 e name2*/ 

let nameA='john'
let nameB='John'

console.log(nameA === nameB) //Verifico che nameA è diverso da nameB

let nameC = nameB.toLowerCase(); //Fa diventare la stringa nameB in minuscolo senza cambiarla

console.log(nameA.toLowerCase() === nameC); // Verifico che nameA è uguale a nameB 