var inputValorHora = document.querySelector('#valor-hora');

var inputHorasProjeto = document.querySelector('#horas-projeto');

var resposta = resultado = document.querySelector ('#resposta');

function calcular() {

    var horasTrabalhadas = inputValorHora.value * inputHorasProjeto.value;
    
    return resultado.innerHTML = "R$" + horasTrabalhadas.toFixed(2);
};