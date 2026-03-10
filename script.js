const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculate");
const restartBtn = document.getElementById("restart");
const message = document.getElementById("message");

calculateBtn.addEventListener("click", calculateIMC);
restartBtn.addEventListener("click", reset);

function calculateIMC(){
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if(!weight || !height || weight<=0 || height<=0){
        message.textContent = "⚠ Ingresa valores válidos";
        message.style.color = "#ff6b6b";
        return;
    }

    const imc = (weight / (height*height)).toFixed(1);

    // Peso ideal mínimo, máximo y promedio
    const idealMin = (18.5 * height * height).toFixed(1);
    const idealMax = (24.9 * height * height).toFixed(1);
    const idealAvg = ((parseFloat(idealMin) + parseFloat(idealMax)) / 2).toFixed(1);

    let category = "";
    let color = "";

    if(imc < 16){
        category = "Delgadez severa";
        color = "#ff3f34";
    } else if(imc < 17){
        category = "Delgadez moderada";
        color = "#ff6b6b";
    } else if(imc < 18.5){
        category = "Delgadez leve";
        color = "#ff9ff3";
    } else if(imc < 25){
        category = "Normal";
        color = "#1dd1a1";
    } else if(imc < 30){
        category = "Sobrepeso";
        color = "#ffdd59";
    } else if(imc < 35){
        category = "Obesidad grado I";
        color = "#ff6b6b";
    } else if(imc < 40){
        category = "Obesidad grado II";
        color = "#ee5253";
    } else{
        category = "Obesidad grado III";
        color = "#c23616";
    }

    message.innerHTML = `${category} (IMC: ${imc})<br>Tu peso ideal promedio sería <strong>${idealAvg} kg</strong> (rango: ${idealMin} – ${idealMax} kg)`;
    message.style.color = color;
}

function reset(){
    weightInput.value = "";
    heightInput.value = "";
    message.textContent = "";
}