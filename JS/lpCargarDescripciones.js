window.onload = function() {
    const cuadroPersona = document.getElementById('CuadroPersonaLanding');
    const nombrePersona = cuadroPersona.getAttribute('data-nombre');
    fetch('../JSON/Descripcioones.json')
        .then(response => {
            console.log('Respuesta de fetch:', response);
            return response.json();
        })
        .then(data => {
            // Encontrar la persona por nombre
            const persona = data.personas.find(p => p.nombre === nombrePersona);
            if (persona) {
                const divPerson = document.createElement('div');
                divPerson.className = "person";

                const divImagen = document.createElement('div');
                divImagen.className = "box-image";
                const imagenPerson = document.createElement('img');
                imagenPerson.src = persona.imagen;
                divImagen.appendChild(imagenPerson);

                const divInfo = document.createElement('div');
                divInfo.className = "info";

                const name = document.createElement('h1');
                name.className = "name";
                name.textContent = persona.nombre;

                const position = document.createElement('h2');
                position.className = "position";
                position.textContent = persona.puesto;

                const line = document.createElement('div');
                line.className = "line";

                const description = document.createElement('p');
                description.className = "des";
                description.textContent = persona.descripcion;

                const divRedes = document.createElement('div');
                divRedes.className = "redesPerson";
                const redes = persona.redes;
                Object.keys(redes).forEach(red => {
                    const [icon, link] = redes[red];
                    const a = document.createElement('a');
                    a.href = link;
                    a.target = "_blank";
                    a.className ="redesIcon";
                    const ionIcon = document.createElement('ion-icon');
                    ionIcon.setAttribute('name', icon);

                    a.appendChild(ionIcon);
                    divRedes.appendChild(a);
                });

                divInfo.appendChild(name);
                divInfo.appendChild(position);
                divInfo.appendChild(line);
                divInfo.appendChild(description);
                divInfo.appendChild(divRedes);

                divPerson.appendChild(divImagen);
                divPerson.appendChild(divInfo);

                cuadroPersona.appendChild(divPerson);
            } else {
                cuadroPersona.textContent = "Persona no encontrada";
            }
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
};
