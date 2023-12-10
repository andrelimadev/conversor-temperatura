let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");
let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");

function cf() {
    
    let valorInput = document.getElementById("graus").value;
    let c = parseFloat(valorInput.replace(',', '.'));
    
    if (!isNaN(c)) {
        let f = 0;
        f = (c * 1.8) + 32;
        temp1.innerHTML = "Celsius";
        temp2.innerHTML = "Fahrenheit";
        celsius.innerHTML = `${c.toFixed(1)}°`;
        fahrenheit.innerHTML = `${f.toFixed(1)}°`;
    } else {
        let alert = document.querySelector(".alerta");
        alert.innerHTML = "Por favor, insira um número válido.";
        
    }
    
}

function fc() {
    
    let valorInput = document.getElementById("graus").value;
    let f = parseFloat(valorInput.replace(',', '.'));
    
    if (!isNaN(f)) {
        let c = 0;
        c = (f - 32) / 1.8;
        temp1.innerHTML = "Fahrenheit";
        temp2.innerHTML = "Celsius";
        celsius.innerHTML = `${f.toFixed(1)}°`;
        fahrenheit.innerHTML = `${c.toFixed(1)}°`;
    } else {
        let alert = document.querySelector(".alerta");
        alert.innerHTML = "Por favor, insira um número válido.";
    }
    
}

function clearInput() {
    const input = document.getElementById("graus");
    input.value = "";
    let alert = document.querySelector(".alerta");
    alert.innerHTML = " ";
    
}