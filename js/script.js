console.log("Olá mundo, esse é meu segundo exemplo de hoje!!!"); 

var inputGanhoMes = document.querySelector('#ganho-mes');

inputGanhoMes.addEventListener('change',function (){
    console.log(inputGanhoMes.value);
});

var inputHorasDias = document.querySelector ('#horas-dia');

inputHorasDias.addEventListener('change',function (){
    console.log(inputHorasDias.value);
});

var resposta = resultado = document.querySelector ('#resposta');

function calcularValorHora() {

    var horasTrabalhardas = inputHorasDias.value * 22;
    console.log(horasTrabalhardas)

    var ganhoHora = inputGanhoMes.value / horasTrabalhardas;
    console.log (ganhoHora)

   return resultado.innerHTML = "R$" + ganhoHora.toFixed(2);

};
