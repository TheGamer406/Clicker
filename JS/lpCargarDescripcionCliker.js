window.onload = function() {
    // Obtener el elemento <div> que contiene el atributo data-nombre
    const descripcion = document.getElementById('pDescripcionClicker');
    // Función para cargar el archivo JSON y mostrar la descripción en el <div> con id "description"
    fetch('../JSON/Descripcioones.json')
        .then(response => {
            console.log('Respuesta de fetch:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Encontrar la descripción de Clicker
            const clicker = data.clicker.find(item => item.descripcion);
            if (clicker) {
                descripcion.textContent = clicker.descripcion;
            } else {
                descripcion.textContent = 'Descripción no encontrada';
            }
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
};