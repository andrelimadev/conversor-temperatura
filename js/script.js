let input = document.querySelector("input");
let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");
let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");

function cf() {
    let f = 0;
    f = (input.value * 1.8) + 32;
    temp1.innerHTML = "Celsius";
    temp2.innerHTML = "Fahrenheit";
    celsius.innerHTML = `${input.value}°`;
    fahrenheit.innerHTML = `${f.toFixed(1)}°`;
}

function fc() {
    let c = 0;
    c = (input.value - 32) / 1.8;
    temp1.innerHTML = "Fahrenheit";
    temp2.innerHTML = "Celsius";
    celsius.innerHTML = `${input.value}°`;
    fahrenheit.innerHTML = `${c.toFixed(1)}°`;
}