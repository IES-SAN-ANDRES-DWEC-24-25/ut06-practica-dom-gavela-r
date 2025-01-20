let lista = document.querySelector('.lista');
let input = document.querySelector('.AñadirElemento');
let boton = document.querySelector('.BotonAñadir');

boton.addEventListener('click', function(){
    let valor = input.value.trim();

    if(valor != ''){
        let li = document.createElement('li');
        li.textContent = valor;

        lista.append(li);

        li.value = '';
    }
})