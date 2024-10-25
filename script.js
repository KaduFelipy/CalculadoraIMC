const botao = document.getElementById('botao');
const resultado = document.getElementsByClassName('resultado');

resultado.textContent = 'teste;'
// resultado.innerHTML =


botao.onclick = calcularIMC;

function calcularIMC (peso, altura) {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let imc = 0;

    imc = peso/(altura^2);

}






