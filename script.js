const botao = document.getElementById('botao');
const resultado = document.querySelector('.resultado');
let imc = 0;



botao.onclick = calcularIMC;

function calcularIMC () {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    

    imc = peso/(altura^2);
    resultado.textContent = imc.toFixed(0);
}






