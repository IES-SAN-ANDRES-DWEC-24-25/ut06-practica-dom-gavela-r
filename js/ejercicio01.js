//variables globales
let h1 = document.getElementsByTagName('h1')[0];
let boton = document.getElementById('boton');
let color = document.getElementById('color');

//evento para cambiar el color al elemeto h1
boton.addEventListener('click', function(){
    //asiganmos a la variable colorNuevo el valor del input color
    let colorNuevo = color.value;
    //con h1.style.color cambiamos el color del elemento h1
    h1.style.color = colorNuevo;
})
