let h1 = document.getElementsByTagName('h1')[0];
let boton = document.getElementById('boton');
let color = document.getElementById('color');

boton.addEventListener('click', function(){
    let colorNuevo = color.value;
    h1.style.color = colorNuevo;
})
