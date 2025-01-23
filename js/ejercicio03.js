//variables globales
let lista = document.querySelector('.lista');
let input = document.querySelector('.AñadirElemento');
let boton = document.querySelector('.BotonAñadir');

//evento en el boton para añadir un elemento
boton.addEventListener('click', function(){
    let valor = input.value.trim();
    //comprobamos que la variable valor no este vacia y añadimos el elemento
    if(valor != ''){
        let li = document.createElement('li');
        li.textContent = valor;

        lista.append(li);

        li.value = '';
    }
})