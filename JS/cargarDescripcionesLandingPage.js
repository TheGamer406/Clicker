window.onload = function() {
    // Obtener el elemento <div> que contiene el atributo data-nombre
    const cuadroPersona = document.getElementById('divCuadroPersonaLanding');
    const nombrePersona = descriptionElement.getAttribute('data-nombre');

    // Función para cargar el archivo JSON y mostrar la descripción en el <div> con id "description"
    fetch('../JSON/Descripcioones.json')
        .then(response => {
            console.log('Respuesta de fetch:', response);
            return response.json();
        })
        .then(data => {
            // Encontrar la persona por nombre
            const persona = data.personas.find(p => p.nombre === nombrePersona);
            if (persona) {
                const divPerson = document.createElement(div);
                    divInfo.className = "person";
                    const divImagen = document.createElement(div);
                        divImgen.className="box-image";
                        const imagenPersona = document.createElement(img);
                            imagenPerson.src = p.imagen;
                    divImagen.appendChild(imagenPersona);
                    const divInfo = document.createElement(div);
                        divInfo.className="info";
                        const name = document.createElement(h1);
                            name.className="name";
                            name.textContent=p.nombre;
                        const position = document.createElement(h2)
                            position.className="position";
                            position.textContent=p.puesto;
                        const line = document.createElement(div);
                            line.className="line";
                        const description = createElement(p);
                            description.className="des"
                            description.textContent=p.descripcion;
                        const divRedes = createElement(div);
                            
                        div.appendChild()
                        divInfo.appendChild(name,position,line,description,divRedes)
                divPerson.appendChild(divImagen,divInfo);
            } else {
                cuadroPersona.textContent = "Persona no encontrada";
            }
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
};
/*
<div class="person">
            <div class="box-image">
                <img src="/Image/Recursos/imagen_persona_ejemplo.jpg" alt="Imagen persona">
            </div>
            <div class="info">
                <h1 class="name">Nombre de ejemplo</h1>
                <h2 class="position">Posicion de trabajo</h2>
                <div class="line"></div>
                <div class="des" id="description" data-nombre="Persona Ejemplo 1"></div>
                <div>
                    <ul class="redes-person">
                        <li><a href="#"><ion-icon name="logo-github"></ion-icon>  </a></li>
                        <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    </ul>
                </div>
            </div>
        </div>
 */