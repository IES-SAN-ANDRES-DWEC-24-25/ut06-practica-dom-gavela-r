// Selecciona todos los elementos h3 y les agregamos un evento clic.
document.querySelectorAll('h3').forEach(h3 => {
    h3.addEventListener('click', () => {
        // Obtiene el texto del elemento h3, eliminando espacios al inicio y al final.
        let grado = h3.textContent.trim();

        // Busca el elemento div más cercano que contenga al h3.
        let div = h3.closest("div");

        // obtenemos el id del div si mo le asignamos el valor de desconocido
        let turno = div?.id || "desconocido";

        // Buscamos en el div el elemento ul.
        let lista = div?.querySelector('ul');

        // Si no encuentra la lista, termina la función.
        if (!lista){
            return;
        } 

        // Crea un array con el texto de cada elemento li dentro de la lista ul.
        let grupos = [...lista.querySelectorAll('li')].map(li => li.textContent.trim());

        // Crea un nuevo elemento div para mostrar el resultado.
        let resultado = document.createElement('div');
        resultado.className = "resultado"; 

        // Agrega el contenido HTML con los datos obtenidos: grado, turno y grupos.
        resultado.innerHTML = `
            Has elegido ${grado} que se imparte en turno de ${turno}.
            Los nº de grupos que se imparten son ${grupos.length}: ${grupos.join(", ")}
        `;

        // Agrega el nuevo <div> con el resultado al final del <body>.
        document.body.appendChild(resultado);
    });
});
