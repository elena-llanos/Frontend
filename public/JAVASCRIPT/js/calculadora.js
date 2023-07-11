
const etiquetas = [
    '%', 'CE', 'C', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, '.', ' ='
]

window.addEventListener('DOMContentLoaded', function () {
    const botonera = this.document.querySelector('#botonera');
    etiquetas.forEach(etiquetas => {
        const boton = this.document.createElement('button');
        boton.innerHTML = etiquetas;

        boton.addEventListener('click', botonPulsado);

        botonera.appendChild(boton);
    })


});

function botonPulsado(e) {
    console.log(e.target);

    const boton = e.target;
    const etiqueta = boton.innerText;
    console.log(etiqueta);
    const display = document.getElementById('display');


    if (etiqueta >= '0' && etiqueta <= '9' || etiqueta == ',') {
        display.value += etiqueta;

        return;
    }

    switch (etiqueta) {
        case '+/-':
            display.value *= -1;
            break;
        case '%':
            display.value *= 0.01;
            break;
        case 'CE':
        case 'C':
            display.value = '';
            break;
        case '/':
        case 'x':
        case '-':
        case '+':
            op1 = parseFloat(display.value.replace(',', '.'));
            op = etiqueta;

            display.value = '';

            break;
        case '=':
            op2 = +display.value.replace(',', '.');

            switch (op) {
                case '+':
                    res = op1 + op2;
                    break;
                case '-':
                    res = op1 - op2;
                    break;
                case 'x':
                    res = op1 * op2;
                    break;
                case '/':
                    res = op1 / op2;
                    break;
            }

            display.value = res.toFixed(2).replace('.', ',');

            break;
    }



}