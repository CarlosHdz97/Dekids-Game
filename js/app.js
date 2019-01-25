let respuestaCorrecta, tdClick;
let ganada = false;
let btnReiniciar = document.getElementById('btnReiniciar');
let divPregunta = document.getElementById('pregunta');
let form = document.getElementById('form');
let spanTurno = document.getElementById('turno');
let tdArray = document.getElementsByTagName('td');
var preguntas = [
  {'pregunta':'&lt;meta charset="utf-8"&gt',
  'respuestas':[
    {'id':1,'respuesta': 'Etiqueta que sirve para poner una imagen en nuestra página'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta': 'Propiedad CSS que nos permite cambiar el color de fondo'},
  ],'correcta':2},
  {'pregunta':' &lt;title&gt; &lt;/title&gt;' ,
  'respuestas':[
    {'id':1,'respuesta': 'Etiqueta que sirve para poner una imagen en nuestra página'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta': 'Etiqueta que sirve para darle un nombre a la página ("Se visuliza en la pestaña")'},
  ],'correcta':3},
  {'pregunta':'&lt;body&gt; &lt;/body&gt;' ,
  'respuestas':[
    {'id':1,'respuesta': 'Etiqueta entre la cual pondremos todo el contenido que queremos que el usuario vea'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta': 'Etiqueta que sirve para darle un nombre a la página ("Se visuliza en la pestaña")'},
  ],'correcta':1},
  {'pregunta':'&lt;link href=.css/style.css&gt;' ,
  'respuestas':[
    {'id':1,'respuesta': 'Etiqueta entre la cual pondremos todo el contenido que queremos que el usuario vea'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta': 'Etiqueta que sirve para enlazar nuestra página web con los estilos'},
  ],'correcta':3},
  {'pregunta':'&lt;p&gt; Hola, bienvenido &lt;/p&gt;' ,
  'respuestas':[
    {'id':1,'respuesta': 'Etiqueta entre la cual pondremos todo el contenido que queremos que el usuario vea'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta': 'Etiqueta que sirve para crear parrafos de texto'},
  ],'correcta':3},
  {'pregunta':'&lt;img src="./img/1.png" alt="1" width="400" height="300"&gt;' ,
  'respuestas':[
    {'id':1,'respuesta':'Etiqueta que sirve para poner una imagen en nuestra página'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta': 'Propiedad CSS que nos permite cambiar el color de fondo'}
  ],'correcta':1},
  {'pregunta':'background-color:red;',
  'respuestas':[
    {'id':1,'respuesta':'Etiqueta que sirve para poner una imagen en nuestra página'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta':'Propiedad CSS que nos permite cambiar el color de fondo'}
  ],'correcta':3},
  {'pregunta':'Navegador',
  'respuestas':[
    {'id':1,'respuesta':'Aplicación que nos permite ingresar a la web'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta':'Propiedad CSS que nos permite cambiar el color de fondo'}
  ],'correcta':1},
  {'pregunta':'alert();',
  'respuestas':[
    {'id':1,'respuesta':'Aplicación que nos permite ingresar a la web'},
    {'id':2,'respuesta': 'Etiqueta que sirve para configurar el tipo de escritura de la página'},
    {'id':3,'respuesta':'Función del navegador que permite mandar mensaje, alertas al usuario'}
  ],'correcta':3},
  {'pregunta':'¿Qué es la consola del navegador?',
  'respuestas':[
    {'id':1,'respuesta':'Aplicación que nos permite ingresar a la web'},
    {'id':2,'respuesta': 'Una herramienta que nos permite visualizar información de la página e interactuar con código js'},
    {'id':3,'respuesta':'Función del navegador que permite mandar mensaje, alertas al usuario'}
  ],'correcta':2},
  {'pregunta':'alert(4+2+"hola");, ¿Cual es el resultado?',
  'respuestas':[
    {'id':1,'respuesta':'6hola'},
    {'id':2,'respuesta': '42hola'},
    {'id':3,'respuesta':'6 hola'}
  ],'correcta':1},
  {'pregunta':'alert("hola"+2+3);, ¿Cual es el resultado?',
  'respuestas':[
    {'id':1,'respuesta':'hola23'},
    {'id':2,'respuesta': 'hola5'},
    {'id':3,'respuesta':'hola 5'}
  ],'correcta':1},
  {'pregunta':'width:500px;' ,
  'respuestas':[
    {'id':1,'respuesta':'Aplicación que nos permite ingresar a la web'},
    {'id':2,'respuesta': 'Propiedad CSS que nos permite cambiar el ancho del elemento'},
    {'id':3,'respuesta':'Función del navegador que permite mandar mensaje, alertas al usuario'}
  ],'correcta':2},
  {'pregunta':'height:500px;' ,
  'respuestas':[
    {'id':1,'respuesta':'Propiedad CSS que nos permite cambiar el alto del elemento'},
    {'id':2,'respuesta': 'Propiedad CSS que nos permite cambiar el ancho del elemento'},
    {'id':3,'respuesta':'Función del navegador que permite mandar mensaje, alertas al usuario'}
  ],'correcta':1},
  {'pregunta':'color:white' ,
  'respuestas':[
    {'id':1,'respuesta':'Propiedad CSS que nos permite cambiar el alto del elemento'},
    {'id':2,'respuesta': 'Propiedad CSS que nos permite cambiar el ancho del elemento'},
    {'id':3,'respuesta':'Propiedad CSS que nos permite cambiar el color de texto'}
  ],'correcta':3},
  {'pregunta':'¿Sistema numérico qué utilizan las computadoras?' ,
  'respuestas':[
    {'id':1,'respuesta':'Sistema decimal 0 1 2 3 4 5 6 7 8 9'},
    {'id':2,'respuesta': 'Sistema binario 0 1'},
    {'id':3,'respuesta':'Sistema octal 0 1 2 3 4 5 6 7'}
  ],'correcta':2},
  {'pregunta':'background-img:url(" ");' ,
  'respuestas':[
    {'id':1,'respuesta':'Propiedad CSS que nos permite cambiar el fondo de un elemento por una imagen'},
    {'id':2,'respuesta': 'Propiedad CSS que nos permite cambiar el color de  la letra'},
    {'id':3,'respuesta':'Propiedad CSS que nos permite cambiar el color de borde de un elemento'}
  ],'correcta':1},
  {'pregunta':'¿Qué es un ingreso?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es el decremento de la cantidad de dinero con el que contamos'},
    {'id':2,'respuesta': 'Es el incremento de la cantidad de dinero que tenemos'},
    {'id':3,'respuesta':'Es gastarnos todo nuestro dinero'}
  ],'correcta':2},
  {'pregunta':'¿Qué es un egreso?',
  'respuestas':[
    {'id':1,'respuesta':'Es el incremento de la cantidad de dinero que tenemos'},
    {'id':2,'respuesta': 'Es mantener el dinero guardado'},
    {'id':3,'respuesta':'Es el decremento de la cantidad de dinero con el que contamos'}
  ],'correcta':3},
  {'pregunta':'¿Cuales son los pasos de Design Thinking?' ,
  'respuestas':[
    {'id':1,'respuesta':'Empatizar, Definir, Idear, Prototipar, Probar'},
    {'id':2,'respuesta': 'Empatizar, Definir, Prototipar'},
    {'id':3,'respuesta':'Prototipar, Probar, Definir, Idear'}
  ],'correcta':1},
  {'pregunta':'¿Qué es el ahorro?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es el decremento de la cantidad de dinero que tenemos'},
    {'id':2,'respuesta': 'El guardar cierta cantidad de dinero de nuestros ingresos'},
    {'id':3,'respuesta':'Es el incremento de la cantidad de dinero que tenemos'}
  ],'correcta':2},
  {'pregunta':'Durante la etapa de EMPATIZAR de Design Thinking ¿Qué se realiza?' ,
  'respuestas':[
    {'id':1,'respuesta':'Volvemos nuestras ideas de proyecto realidad'},
    {'id':2,'respuesta': 'Identificamos los problemas cuyas soluciones serán clave para la obtención de un resultado'},
    {'id':3,'respuesta':'Se identifican las necesidades de los usuarios implicados en la solución que estemos desarrollando'}
  ],'correcta':3},
  {'pregunta':'Durante la etapa de DEFINIR de Design Thinking ¿Qué se realiza?' ,
  'respuestas':[
    {'id':1,'respuesta':'Probaremos nuestros prototipos con los usuarios implicados en la solución'},
    {'id':2,'respuesta': 'Se identifican las necesidades de los usuarios implicados en la solución que estemos desarrollando'},
    {'id':3,'respuesta':'Volvemos nuestras ideas de proyecto realidad'}
  ],'correcta':2},
  {'pregunta':'Durante la etapa de IDEAR de Design Thinking ¿Qué se realiza?' ,
  'respuestas':[
    {'id':1,'respuesta':'Generación de un sinfín de opciones y alternativas de solución'},
    {'id':2,'respuesta': 'Volvemos nuestras ideas de proyecto realidad'},
    {'id':3,'respuesta':'Se identifican las necesidades de los usuarios implicados en la solución que estemos desarrollando'}
  ],'correcta':1},
  {'pregunta':'Durante la etapa de PROTOTIPAR de Design Thinking ¿Qué se realiza?' ,
  'respuestas':[
    {'id':1,'respuesta':'Se identifican las necesidades de los usuarios implicados en la solución que estemos desarrollando'},
    {'id':2,'respuesta': 'Probaremos nuestros prototipos con los usuarios implicados en la solución'},
    {'id':3,'respuesta':'Volvemos nuestras ideas de proyecto realidad'}
  ],'correcta':3},
  {'pregunta':'Durante la etapa de PROBAR de Design Thinking ¿Qué se realiza?' ,
  'respuestas':[
    {'id':1,'respuesta':'Volvemos nuestras ideas de proyecto realidad'},
    {'id':2,'respuesta': 'Probaremos nuestros prototipos con los usuarios implicados en la solución'},
    {'id':3,'respuesta':'Generación de un sinfín de opciones y alternativas de solución'}
  ],'correcta':2},
  {'pregunta':'¿Qué es el trueque?' ,
  'respuestas':[
    {'id':1,'respuesta':'Dar dinero a cambio de recibir algo'},
    {'id':2,'respuesta': 'Dar una cosa y recibir otra a cambio, sin que intervenga el dinero'},
    {'id':3,'respuesta':'Intercambiar algo por dinero'}
  ],'correcta':2},
  {'pregunta':'¿Qué es el dinero?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es un medio de cambio, que se puede intercambiar por cierto bien o servicio'},
    {'id':2,'respuesta': 'Son las deudas que tenemos'},
    {'id':3,'respuesta':'Es la cantidad de cosas que podemos adquirir'}
  ],'correcta':1},
  {'pregunta':'¿Qué son las finanzas sanas?' ,
  'respuestas':[
    {'id':1,'respuesta':'Gastar más dinero del que tenemos'},
    {'id':2,'respuesta': 'Gastar todo el dinero que tenemos disponible'},
    {'id':3,'respuesta':'Gastar menos dinero de la cantidad que tenemos disponible'}
  ],'correcta':3},
  {'pregunta':'¿Qué es un presupuesto?' ,
  'respuestas':[
    {'id':1,'respuesta':'Dar una cosa y recibir otra a cambio, sin que intervenga el dinero'},
    {'id':2,'respuesta': 'Cálculo anticipado del coste de una actividad a realizar'},
    {'id':3,'respuesta':'Son las deudas que tenemos'}
  ],'correcta':2},
  {'pregunta':'¿Qué es la oferta?' ,
  'respuestas':[
    {'id':1,'respuesta':'Cantidad de bienes o servicios que guardar'},
    {'id':2,'respuesta': 'Cantidad de personas o empresas que se dedican a vender o distribuir un bien o servicio'},
    {'id':3,'respuesta':'Cantidad de personas que estan dispuestos a adquirir un bien o servicio'}
  ],'correcta':2},
  {'pregunta':'¿Qué es la demanda?' ,
  'respuestas':[
    {'id':1,'respuesta':'Cantidad de personas que estan dispuestos a adquirir un bien o servicio'},
    {'id':2,'respuesta': 'Cantidad de personas o empresas que se dedican a vender o distribuir un bien o servicio'},
    {'id':3,'respuesta':'Cantidad de bienes o servicios que guardar'}
  ],'correcta':1},
  {'pregunta':'¿Qué es el precio?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es la cantidad de dinero que se necesita para comprar un bien o servicio'},
    {'id':2,'respuesta': 'Es la cantidad de dinero que se necesito para realizar un bien o servicio'},
    {'id':3,'respuesta':'Es la cantidad de dinero que ganamos de la venta de un bien o servicio'}
  ],'correcta':1},
  {'pregunta':'¿Qué es la costo?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es la cantidad de dinero que ganamos de la venta de un bien o servicio'},
    {'id':2,'respuesta': 'Es la cantidad de dinero que se necesita para comprar un bien o servicio'},
    {'id':3,'respuesta':'Es la cantidad de dinero que se necesita para fabricar un bien o servicio'}
  ],'correcta':3},
  {'pregunta':'¿Qué es la ganancia?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es la cantidad de dinero que se necesita para comprar un bien o servicio'},
    {'id':2,'respuesta': 'Es la cantidad de dinero que se necesita para fabricar un bien o servicio'},
    {'id':3,'respuesta':'Es la cantidad de dinero que ganamos de la venta de un bien o servicio'}
  ],'correcta':3},
  {'pregunta':'margin:100px;' ,
  'respuestas':[
    {'id':1,'respuesta':'Propiedad CSS que permite separar cierta distancia un elemento de otro'},
    {'id':2,'respuesta': 'Propiedad CSS que permite separar cierta distancia un elemento de su borde'},
    {'id':3,'respuesta':'Propiedad CSS que permite agregar color, tipo y grosor de borde de un elemento'}
  ],'correcta':1},
  {'pregunta':'padding:150px;' ,
  'respuestas':[
    {'id':1,'respuesta':'Propiedad CSS que permite agregar color, tipo y grosor de borde de un elemento'},
    {'id':2,'respuesta': 'Propiedad CSS que permite separar cierta distancia un elemento de otro'},
    {'id':3,'respuesta':'Propiedad CSS que permite separar cierta distancia un elemento de su borde'}
  ],'correcta':3},
  {'pregunta':'border: solid 2px black;' ,
  'respuestas':[
    {'id':1,'respuesta':'Propiedad CSS que permite separar cierta distancia un elemento de otro'},
    {'id':2,'respuesta': 'Propiedad CSS que permite separar cierta distancia un elemento de su borde'},
    {'id':3,'respuesta':'Propiedad CSS que permite agregar color, tipo y grosor de borde de un elemento'}
  ],'correcta':3},
  {'pregunta':'¿Qué es un hacker?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es una persona que se dedica a romper o vulneran algún sistema de seguridad con el propósito mejorarlo y hacerlo más seguro'},
    {'id':2,'respuesta': 'Es una persona que se dedica a jugar videojuegos de PC'},
    {'id':3,'respuesta':'Es una persona que se dedica a romper o vulneran algún sistema de seguridad con el propósito obtener un beneficio'}
  ],'correcta':3},
  {'pregunta':'¿Qué es un cracker?' ,
  'respuestas':[
    {'id':1,'respuesta':'Es una persona que se dedica a romper o vulneran algún sistema de seguridad con el propósito obtener un beneficio'},
    {'id':2,'respuesta': 'Es una persona que se dedica a romper o vulneran algún sistema de seguridad con el propósito mejorarlo y hacerlo más seguro'},
    {'id':3,'respuesta':'Es una persona que se dedica a jugar videojuegos de PC'}
  ],'correcta':2},
  {'pregunta':'¿Para que sirve el lenguaje CSS?' ,
  'respuestas':[
    {'id':1,'respuesta':'Lenguaje diseñado para agregar estilo a una página web'},
    {'id':2,'respuesta': 'Lenguaje diseñado para realizar o maquetar la estructura de nuestra página web'},
    {'id':3,'respuesta':'Lenguaje diseñado para agregar interactividad a nuestra página web'}
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
