//vatiables globales 
let lista = document.querySelector('ul');
let input = document.querySelector('.AñadirElemento');
let boton = document.getElementsByTagName('button')

//evento para añadir un elemento
boton[0].addEventListener('click', function(){
    let valor = input.value.trim();
    //comprobamos que la variable valor no este vacia para añadir el elemento
    if(valor != ''){
        let li = document.createElement('li');
        li.textContent = valor;

        lista.append(li);

        li.value = '';
    }
})

//evento para eliminar el ultimo elemento de la lista
boton[1].addEventListener('click', function(){
    //comprobamos que la lista sea mayor que 0 y eliminamos el ultimo elemento
    if(lista.children.length > 0){
        lista.removeChild(lista.lastElementChild)
    }
})

//evento para eliminar el primer elemento de la lista
boton[2].addEventListener('click', function(){
    //comprobamos que la lista sea mayor a 0 y eliminamos el primer elemento
    if(lista.children.length > 0){
        lista.removeChild(lista.firstElementChild);
    }
})
