// Variables globales 
let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";

// Evento que espera a que cargue la página completamente antes iniciar 
window.addEventListener("load", iniciar);

function iniciar() {
  // Se asignan elementos del DOM a las variables globales 
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul'); 
  lis = listUl.children; 
  toggleList = document.getElementById('toggleList'); 
  descriptionInput = document.querySelector('input.description'); 
  descriptionP = document.querySelector('p.description'); 
  descriptionButton = document.querySelector('button.description'); 
  addItemInput = document.querySelector('input.addItemInput'); 
  addItemButton = document.querySelector('button.addItemButton'); 

  // Se añaden botones (subir, bajar, borrar) a cada elemento de la lista existente.
  for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
  }

  // Se agregan los eventos de clic a los botones y a la lista.
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista); 
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}

function attachListItemButtons(li) {
  // Crea un botón para subir el elemento y lo añade al li.
  let subir = document.createElement('button');
  subir.className = 'subir';
  subir.textContent = 'subir'; 
  li.appendChild(subir); 

  // Crea un botón para bajar el elemento y lo añade al li.
  let bajar = document.createElement('button');
  bajar.className = 'bajar';
  bajar.textContent = 'bajar';
  li.appendChild(bajar);

  // Crea un botón para borrar el elemento y lo añade al li.
  let borrar = document.createElement('button');
  borrar.className = 'borrar';
  borrar.textContent = 'borrar';
  li.appendChild(borrar);
}

function crearbotones(event) {
  // comprobamos si el evento click fue un boton
  if (event.target.tagName === 'button') {
    let boton = event.target; 
    let li = button.parentNode; 
    let ul = li.parentNode; 

    // Si el botón tiene la clase borrar, elimina el li del ul.
    if (boton.className === 'borrar') {
      ul.removeChild(li);
      // Si el botón tiene la clase subir, mueve el li hacia arriba.
    }else if (button.className === 'subir') {
      let subir = li.previousElementSibling; 
      if (subir) {
        ul.insertBefore(li, subit); 
      }
    } 
    // Si el botón tiene la clase bajar, mueve el li hacia abajo.
    else if (button.className === 'bajar') {
      let abajo = li.nextElementSibling; 
      if (abajo) {
        ul.insertBefore(abajo, li); 
      }
    }
  }
}

function MostrarOcultarLista() {
  // Alterna entre mostrar y ocultar la lista ajustando la propiedad display.
  if (listDiv.style.display === 'none') {
    listDiv.style.display = 'block'; 
    toggleList.textContent = 'Ocultar lista'; 
  } else {
    listDiv.style.display = 'none'; 
    toggleList.textContent = 'Mostrar lista'; 
  }
}

function CambiarTextoLista() {
  // Cambia el texto del párrafo con el valor del input .
  descriptionP.textContent = descriptionInput.value + ':'; 
  descriptionInput.value = ''; 
}

function AñadirElemento() {
  // Toma el texto del input para el nuevo elemento.
  let newItemText = addItemInput.value;
  if (newItemText.trim() === '') {
    return; 
  }

  // Crea un nuevo elemento li y le asigna el texto ingresado.
  let li = document.createElement('li');
  li.textContent = newItemText;

  // Agrega los botones al nuevo elemento.
  attachListItemButtons(li);

  // Añade el nuevo elemento a la lista.
  listUl.appendChild(li);

  // Limpia el campo de entrada.
  addItemInput.value = '';
}
