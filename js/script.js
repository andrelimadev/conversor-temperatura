let input = document.querySelector("input").value;
let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");
let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");

function cf(input = 0) {
    let f = 0;
    f = (input * 1.8) + 32;
    temp1.innerHTML = "Celsius";
    temp2.innerHTML = "Fahrenheit";
    celsius.innerHTML = `${input}°`;
    fahrenheit.innerHTML = `${f.toFixed(1)}°`;
}

function fc(input = 0) {
    let c = 0;
    c = (input - 32) / 1.8;
    temp1.innerHTML = "Fahrenheit";
    temp2.innerHTML = "Celsius";
    celsius.innerHTML = `${input}°`;
    fahrenheit.innerHTML = `${c.toFixed(1)}°`;
}