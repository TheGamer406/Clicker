window.onload = function() {
    // Obtener el elemento <div> que contiene el atributo data-nombre
    const descriptionElement = document.getElementById('description');
    const nombrePersona = descriptionElement.getAttribute('data-nombre');

    // Función para cargar el archivo JSON y mostrar la descripción en el <div> con id "description"
    fetch('../Textos/Descripcioones.json')
        .then(response => {
            console.log('Respuesta de fetch:', response);
            return response.json();
        })
        .then(data => {
            // Encontrar la persona por nombre
            const persona = data.personas.find(p => p.nombre === nombrePersona);
            if (persona) {
                const pElement = document.createElement('p');
                pElement.textContent = persona.descripcion;
                descriptionElement.appendChild(pElement);
            } else {
                descriptionElement.textContent = "Descripción no encontrada.";
            }
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
};
