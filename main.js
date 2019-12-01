console.log('Fizz Buzz Live')




const mainDiv = document.getElementById("maindiv");
const generate = document.getElementById("start");
let messagevalues = document.getElementById("message");



generate.onmouseup = checkinputs;

function checkinputs() {


    let startIn = parseFloat(document.getElementById("startId").value);
    let endIn = parseFloat(document.getElementById("endId").value);
    let fizzIn = parseFloat(document.getElementById("fizzId").value);
    let buzzIn = parseFloat(document.getElementById("buzzId").value);

    if (startIn < 1 || startIn > 100) {
        console.log("check inputs");
        messagevalues.innerText = '"From" value must be 1-100';
        console.log("invalid input start");
    }

    else if (endIn < 1 || endIn > 100) {
        console.log("check inputs");
        messagevalues.innerText = '"To" value must be 1-100';
        console.log("invalid input end");
    }

    else if (fizzIn < 1 || fizzIn > 100) {
        console.log("check inputs");
        messagevalues.innerText = '"Fizz" value must be 1-100';
        console.log("invalid input fizz");
    }

    else if (buzzIn < 1 || buzzIn > 100) {
        console.log("check inputs");
        messagevalues.innerText = '"Buzz" value must be 1-100';
        console.log("invalid input buzz");

    } else {
        messagevalues.innerText = "";
        console.log("execute");
        console.log(startIn);
        console.log(endIn);
        console.log(fizzIn);
        console.log(buzzIn);
        fizzBuzz();
    }

}


function fizzBuzz() {

    let startIn = parseFloat(document.getElementById("startId").value);
    let endIn = parseFloat(document.getElementById("endId").value);
    let fizzIn = parseFloat(document.getElementById("fizzId").value);
    let buzzIn = parseFloat(document.getElementById("buzzId").value);


    for (i = startIn; i <= endIn; i++) {

        const fizzbuzz = document.createElement('div');


        if (i % fizzIn === 0 && i % buzzIn === 0) {
            console.log("fizzbuzz" + i);
            mainDiv.appendChild(fizzbuzz);
            fizzbuzz.setAttribute("class", "fizzbuzz");
            fizzbuzz.innerText = i + " FizzBuzz";
        } else if (i % fizzIn === 0 && i % buzzIn !== 0) {
            console.log("fizz" + i);
            mainDiv.appendChild(fizzbuzz);
            fizzbuzz.setAttribute("class", "fizz");
            fizzbuzz.innerText = i + " Fizz";
        } else if (i % fizzIn !== 0 && i % buzzIn === 0) {
            console.log("buzz" + i);
            mainDiv.appendChild(fizzbuzz);
            fizzbuzz.setAttribute("class", "buzz");
            fizzbuzz.innerText = i + " Buzz";
        } else {
            console.log("none" + i);
            mainDiv.appendChild(fizzbuzz);
            fizzbuzz.setAttribute("class", "none");
            fizzbuzz.innerText = i;

        }

    }

}

const clearButton = document.getElementById("clear")
clearButton.onclick = () => {
    console.log("clear all divs");
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);

    }
}

const clearbefore = document.getElementById("start")
generate.onmousedown = () => {
    console.log("clear before");
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);

    }
}


