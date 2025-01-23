//variables blobales
let ul = document.getElementById('ul');
let boton = document.getElementById('boton');

//evento para añadir la clase inverso al elemento ul
boton.addEventListener('click', (event)=>{
    //comprobamos que el elemeto ul no contiene la clase inverso, 
    //si no la contiene se la añadimos
    if(!event.target.classList.contains('inverso')){
        ul.classList.toggle('inverso');
    }
})