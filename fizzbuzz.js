
// ciclo dei numeri

for (let i = 1; i <= 100; i++) {
    // vediamo per prima cosa se i è divisibile sia per 5 che per 10
    if (i % 5 === 0 && i % 10 === 0) {
        console.log("FizzBuzz");

    // poi vediamo se è divisibile per 5
    } else if (i % 5 === 0) {
        console.log("Buzz");

    // e infine per 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
    }
    
    // se le condizioni di sopra sono tutte false stampiamo in console solo il numero
    else {
        console.log(i);
    }

}