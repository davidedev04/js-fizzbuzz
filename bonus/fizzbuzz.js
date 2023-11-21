const container = document.querySelector(".container");

// ciclo dei numeri

for (let i = 1; i <= 100; i++) {
    // implementazione sull'html
    const square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    
    // vediamo per prima cosa se i è divisibile sia per 5 che per 10
    if (i % 5 === 0 && i % 10 === 0) {
        console.log("FizzBuzz");
        square.append ("FizzBuzz");
        square.style.backgroundColor = "#0f0";

    // poi vediamo se è divisibile per 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
        square.append ("Buzz");
        square.style.backgroundColor = "#ffd166";

    // e infine per 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        square.append("Fizz");
        square.style.backgroundColor = "#0cd6a1";
    }

    // se le condizioni di sopra sono tutte false stampiamo in console solo il numero
    else {
        console.log(i);
    }

    container.append(square);

}