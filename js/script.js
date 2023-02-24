let visor = document.getElementById('resultado');
let digitos = visor.innerHTML.length;
let resultado = '';

function inserir(digito) {
    if (digitos < 12) {
        visor.innerHTML += digito;
        digitos++;
    }
}

function limpar() {
    visor.innerHTML = '';
    digitos = 0;
}

function apagar() {
    visor.innerHTML = visor.innerHTML.substring(0, visor.innerHTML.length -1);
    digitos--;
}

function calcular() {
    resultado = eval(visor.innerHTML);
    exibeResultado(resultado);
    digitos = visor.innerHTML.length;
}

function exibeResultado(resultado) {    
    if (!Number.isInteger(resultado)) {
        visor.innerHTML = resultado.toFixed(2);
    } else {
        visor.innerHTML = resultado;
    }
}