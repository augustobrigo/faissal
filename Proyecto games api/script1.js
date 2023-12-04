var generos = [];
window.onload=obtenerGeneros;
var select = document.getElementById("generos");
var contenido = document.getElementById("contenido");
contenido.className = "contenedor";
var boton = document.getElementById("boton");
function inicio(){
    let genero2 = select.value;
    console.log(genero2);
    ObtenerJuegos(genero2);
    select.onchange = function(){
        contenido.innerHTML="";
        var sel = select.selectedIndex;
        let genero = select.options[sel].value;
        ObtenerJuegos(genero);
    }
}
function obtenerGeneros(){
    fetch("games.json").then(objeto => objeto.json()).then(genero =>{
        for (let i = 0; i < genero.length; i++) {
            let nombre = genero[i].genre;
            let resultado = generos.find(nombres => nombres === nombre);
            if(resultado === undefined){
                generos.push(nombre);
            }
        }
        funcionRellenar();
        inicio();
    });
}
function funcionRellenar(){
    console.log("generos:"+generos)
    generos.forEach(element => {
        console.log("element x"+element);
        let elemento = document.createElement("option");
        elemento.innerHTML = element;
        select.appendChild(elemento);
    });
}
function ObtenerJuegos(nombreGenero){
    fetch("games.json").then(objeto => objeto.json()).then(array => {
        for(let i = 0; i < array.length; i++){
            if(array[i].genre === nombreGenero){
                let imagen = document.createElement("img");
                imagen.setAttribute("src", array[i].thumbnail);
                contenido.appendChild(imagen);
            }
        }
    });
}