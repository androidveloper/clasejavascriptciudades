
import {barcelona, roma, paris, londres} from "./ciudades.js"
// obtener los elementos del DOM

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

//agregar evento click a cada enlace

enlaces.forEach( function(enlace){

    enlace.addEventListener('click', function()
    {
        //REMOVER LA CLASE ACTIVE DE TODOS LOS ENLACES
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');

        });

        //AGREGAR ACTIVO AL QUE CORRESPONDA. Agregar la clase activa al enla actual
        this.classList.add('active');

    //TRAER LA INFORMACION DEL OBJETO QUE CORRESPONDE A LA ELECCION
        //Obtener el contendio correspondiente según el enlace

        let contenido = obtenerContenido(this.textContent);

    //MOSTRAR EL CONTENIDO EN EL DOM
          tituloElemento.innerHTML= contenido.titulo;
          subtituloElemento.innerHTML= contenido.subtitulo;
          parrafoElemento.innerHTML= contenido.parrafo;

    })

    
});

function obtenerContenido(enlace){
    let contenido = {
          'Barcelona' : barcelona,
          'Roma' : roma,
           'París' : paris,
           'Londres' : londres, 
    };
    return contenido[enlace];
}

