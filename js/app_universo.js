let respuestaCorrecta, tdClick;
let ganada = false;
let btnReiniciar = document.getElementById('btnReiniciar');
let divPregunta = document.getElementById('pregunta');
let form = document.getElementById('form');
let spanTurno = document.getElementById('turno');
let tdArray = document.getElementsByTagName('td');
var preguntas = [
  {'pregunta':'Parte de la filosofía que estudia si el razonamiento es verdadero o es falso ',
  'respuestas':[
    {'id':1,'respuesta': 'Enunciados'},
    {'id':2,'respuesta': 'Lógica'},
    {'id':3,'respuesta': 'Proposición'},
  ],'correcta':2},
  {'pregunta':'Es ejemplo de una proposición lógica' ,
  'respuestas':[
    {'id':1,'respuesta': 'El carro es amarillo'},
    {'id':2,'respuesta': '¿Eres del Norte?'},
    {'id':3,'respuesta': 'Caminarás y te sentirás feliz'},
  ],'correcta':1},
  {'pregunta':'Es ejemplo de un enunciado pero no de una proposición lógica',
  'respuestas':[
    {'id':1,'respuesta': 'Me encanta aprender'},
    {'id':2,'respuesta': 'El lunes es fantástico'},
    {'id':3,'respuesta': 'Salta 99 veces'},
  ],'correcta':3},
  {'pregunta':'Una proposición se puede representar con letras',
  'respuestas':[
    {'id':1,'respuesta': 'Verdadero'},
    {'id':2,'respuesta': 'Falso'},
    {'id':3,'respuesta': '-'},
  ],'correcta':1},
  {'pregunta':'Es una proposición compuesta' ,
  'respuestas':[
    {'id':1,'respuesta': 'El auto es verde'},
    {'id':2,'respuesta': 'Caminarás junto a tu papá esta tarde'},
    {'id':3,'respuesta': 'El río es azul y la paloma es blanca'},
  ],'correcta':3},
  {'pregunta':'Son ejemplos de conectivos lógicos',
  'respuestas':[
    {'id':1,'respuesta': 'Para qué, estar'},
    {'id':2,'respuesta': 'Y, o, si...entonces'},
    {'id':3,'respuesta': 'Ser, cómo, pensar'}
  ],'correcta':2},
  {'pregunta':'"2^3" o 2x2x2 como resultado ',
  'respuestas':[
    {'id':1,'respuesta':'4'},
    {'id':2,'respuesta': '2'},
    {'id':3,'respuesta':'8'}
  ],'correcta':3},
  {'pregunta':'¿Cuál es la compuerta lógica que sólo deja pasar energía si las 2 variables están prendidas?',
  'respuestas':[
    {'id':1,'respuesta':'NOT'},
    {'id':2,'respuesta': 'AND'},
    {'id':3,'respuesta':'OR'}
  ],'correcta':2},
  {'pregunta':'¿Cuál es la compuerta lógica que deja pasar energía cuando una o las 2 variables están prendidas?',
  'respuestas':[
    {'id':1,'respuesta':'XOR'},
    {'id':2,'respuesta': 'OR'},
    {'id':3,'respuesta':'AND'}
  ],'correcta':2},
  {'pregunta':' _________ deja pasar energía cuando uno está prendido, pero el otro no',
  'respuestas':[
    {'id':1,'respuesta':'NOT'},
    {'id':2,'respuesta': 'XOR'},
    {'id':3,'respuesta':'OR'}
  ],'correcta':2},
  {'pregunta':'_________ es una negación',
  'respuestas':[
    {'id':1,'respuesta':'XOR'},
    {'id':2,'respuesta': 'OR'},
    {'id':3,'respuesta':'NOT'}
  ],'correcta':3},
  {'pregunta':'_________ es un AND pero negativo',
  'respuestas':[
    {'id':1,'respuesta':'XOR'},
    {'id':2,'respuesta': 'OR'},
    {'id':3,'respuesta':'NAND'}
  ],'correcta':3},
  {'pregunta':'Usando la compuerta OR, si tienes a X=0 y Z=0, el resultado de Y es....' ,
  'respuestas':[
    {'id':1,'respuesta':'1'},
    {'id':2,'respuesta': '0'},
    {'id':3,'respuesta':'-'}
  ],'correcta':2},
  {'pregunta':'Usando la compuerta AND, si tienes a X=1 y Z=0, el resultado de Y es....' ,
  'respuestas':[
    {'id':1,'respuesta':'1'},
    {'id':2,'respuesta': '0'},
    {'id':3,'respuesta':'-'}
  ],'correcta':2},
  {'pregunta':'Usando la compuerta AND, si tienes a X=1 y Z=1, el resultado de Y es....' ,
  'respuestas':[
    {'id':1,'respuesta':'1'},
    {'id':2,'respuesta': '0'},
    {'id':3,'respuesta':'-'}
  ],'correcta':1},
  {'pregunta':'Son instrucciones bien definidas y finitas para lograr un objetivo' ,
  'respuestas':[
    {'id':1,'respuesta':'Algoritmo'},
    {'id':2,'respuesta': 'Compuertas lógicas'},
    {'id':3,'respuesta':'Lógica'}
  ],'correcta':1}
];



// FUNCIONES

function validarUno() {
    if (tdArray[0].childNodes.length) {
        if (tdArray[1].childNodes.length && tdArray[2].childNodes.length && tdArray[0].childNodes[0].data == tdArray[1].childNodes[0].data && tdArray[0].childNodes[0].data == tdArray[2].childNodes[0].data) {
            cambiarFondo(tdArray[0], tdArray[1], tdArray[2]);
            return true;
        } else if (tdArray[3].childNodes.length && tdArray[6].childNodes.length && tdArray[0].childNodes[0].data == tdArray[3].childNodes[0].data && tdArray[0].childNodes[0].data == tdArray[6].childNodes[0].data) {
            cambiarFondo(tdArray[0], tdArray[3], tdArray[6]);
            return true;
        } else if (tdArray[4].childNodes.length && tdArray[8].childNodes.length && tdArray[0].childNodes[0].data == tdArray[4].childNodes[0].data && tdArray[0].childNodes[0].data == tdArray[8].childNodes[0].data) {
            cambiarFondo(tdArray[0], tdArray[4], tdArray[8]);
            return true;
        }
    }

    return false;
}

function validarCinco() {
    if (tdArray[4].childNodes.length) {
        if (tdArray[1].childNodes.length && tdArray[7].childNodes.length && tdArray[4].childNodes[0].data == tdArray[1].childNodes[0].data && tdArray[4].childNodes[0].data == tdArray[7].childNodes[0].data) {
            cambiarFondo(tdArray[4], tdArray[1], tdArray[7]);
            return true;
        } else if (tdArray[3].childNodes.length && tdArray[5].childNodes.length && tdArray[4].childNodes[0].data == tdArray[3].childNodes[0].data && tdArray[4].childNodes[0].data == tdArray[5].childNodes[0].data) {
            cambiarFondo(tdArray[4], tdArray[3], tdArray[5]);
            return true;
        } else if (tdArray[6].childNodes.length && tdArray[2].childNodes.length && tdArray[6].childNodes[0].data == tdArray[4].childNodes[0].data && tdArray[4].childNodes[0].data == tdArray[2].childNodes[0].data) {
            cambiarFondo(tdArray[4], tdArray[6], tdArray[2]);
            return true;
        }
    }

    return false;
}

function validarNueve() {
    if (tdArray[8].childNodes.length) {
        if (tdArray[5].childNodes.length && tdArray[2].childNodes.length && tdArray[8].childNodes[0].data == tdArray[5].childNodes[0].data && tdArray[8].childNodes[0].data == tdArray[2].childNodes[0].data) {
            cambiarFondo(tdArray[8], tdArray[5], tdArray[2]);
            return true;
        } else if (tdArray[7].childNodes.length && tdArray[6].childNodes.length && tdArray[8].childNodes[0].data == tdArray[7].childNodes[0].data && tdArray[8].childNodes[0].data == tdArray[6].childNodes[0].data) {
            cambiarFondo(tdArray[8], tdArray[7], tdArray[6]);
            return true;
        }
    }

    return false;
}

function toggleSeleccionada(tdSeleccionada=null) {
    for (var i = tdArray.length - 1; i >= 0; i--) {
        tdArray[i].classList.remove('seleccionada');
    }
    if (tdSeleccionada) {
        tdSeleccionada.classList.add('seleccionada');
    }
}

function cambiarFondo(td1, td2, td3) {
    td1.classList.add('seleccionada');
    td2.classList.add('seleccionada');
    td3.classList.add('seleccionada');
}



// EVENTOS

window.onload = function() {
  preguntas = preguntas.sort(function() {return Math.random() - 0.5});
};
for (var i = tdArray.length - 1; i >= 0; i--) {
    tdArray[i].addEventListener('click', e => {
        if (ganada) {
            return;
        }

        toggleSeleccionada();
        divPregunta.innerHTML = '';
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }

        if (e.target.childNodes.length) {
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * preguntas.length-1) + 1;
        //
        let pregunta = preguntas[preguntas.length-1].pregunta;
        let respuestas = preguntas[preguntas.length-1].respuestas;
        let idCorrecta = preguntas[preguntas.length-1].correcta;
        respuestaCorrecta = preguntas[preguntas.length-1].respuestas[idCorrecta-1];
        tdClick = document.getElementById(e.target.id);
        toggleSeleccionada(tdClick);

        divPregunta.innerHTML = pregunta;

        respuestas.forEach(respuesta => {
            let radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'respuestas');
            radio.setAttribute('id', 'respuesta'+respuesta.id);
            radio.setAttribute('value', respuesta.id);

            let label = document.createElement('label');
            label.setAttribute('for', 'respuesta'+respuesta.id);
            label.setAttribute('class', 'label');
            let texto = document.createTextNode(respuesta.respuesta);
            label.appendChild(texto);
            let br = document.createElement('br');

            form.appendChild(radio);
            form.appendChild(label);
            form.appendChild(br);
        });

        let submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Checar');
        submit.setAttribute('class', 'btn');
        form.appendChild(submit);
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();

    let radios = e.target.respuestas;
    let cambiaTurno = false;

    radios.forEach(radio => {
        if (radio.checked) {
            if (radio.value == respuestaCorrecta.id) {
                preguntas.pop();
                swal('Respuesta correcta','Buen trabajo','success');
                let equisCirculo = turno ? 'X' : 'O';
                let texto = document.createTextNode(equisCirculo);
                tdClick.appendChild(texto);
                if (validarUno() || validarCinco() || validarNueve()) {
                  swal('Gana ' + equisCirculo, 'Buen trabajo', 'success');
                    //alert('Gana ' + equisCirculo);
                    ganada = true;
                    sessionStorage.setItem('turno', turno);
                }
            } else {

              swal('Has respondido incorrectamente', "Recuerda estudiar para reforzar los temas", "error");
                //alert('Has respondido incorrectamente');

            }
            if (!ganada) { tdClick.classList.remove('seleccionada');
          }
            cambiaTurno = true;
        }
    });

    if (cambiaTurno) {
        turno = !turno;
        spanTurno.innerHTML = turno ? 'X' : 'O';
        tdSeleccionada = null;
        divPregunta.innerHTML = '';
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }
    } else {
        swal('Escoge una opción','','info');
        //alert('Escoge una opción');
    }
});

window.addEventListener('load', e => {
    window.turno = sessionStorage.getItem('turno');

    if (turno === null) {
        sessionStorage.setItem('turno', true);
    } else {
        sessionStorage.setItem('turno', turno);
    }

    turno = sessionStorage.getItem('turno');
    spanTurno.innerHTML = turno === "true" ? 'X' : 'O';
});

btnReiniciar.addEventListener('click', function() {
    location.reload();
});
