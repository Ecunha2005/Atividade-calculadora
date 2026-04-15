function appendToDisplay(valor) {
    const visor = document.getElementById('resultado');
    if (valor === 'AC') {
        visor.value = '0';
    } 
    else if (valor === '+/-') {
        visor.value = (parseFloat(visor.value) * -1).toString();
    }
    else if (valor === '%') {
        visor.value = (parseFloat(visor.value) / 100).toString();
    }
    else {
        if (visor.value === '0') {
            visor.value = valor;
        } else {
            visor.value += valor;
        }
    }
}

function calculate() {
    const visor = document.getElementById('resultado');

    try {
        let expressao = visor.value.replace(/X/g, '*');
        let resultado = eval(expressao);
        visor.value = resultado;
    } catch (erro) {
        visor.value = 'Erro';
    }
}