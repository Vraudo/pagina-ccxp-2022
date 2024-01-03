const Dia = document.getElementById('dias')
const Hora = document.getElementById('horas')
const Minuto = document.getElementById('minutos')
const Segundo = document.getElementById('segundos')

const lançamento = '01 dec 2022'

function countdown(){
    const dataLanc = new Date(lançamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    Dia.innerHTML = finalDias
    Hora.innerHTML = formatotempo(finalHoras)
    Minuto.innerHTML =formatotempo(finalMinutos)
    Segundo.innerHTML = formatotempo(finalSegundos)

}
function formatotempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
setInterval(countdown, 1000)

// proximo comando

const ingressos = [];

function addRedBorder(id){
    element = document.querySelector("#" + id)
    element.style.border = "5px solid blue";    
}


function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle('card-highlight');
}

function selectCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

 showSelectedCards = () =>
{
    if(ingressos.length > 0) alert("Ingressos selecionados" + ingressos);

}