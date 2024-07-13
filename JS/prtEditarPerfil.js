
document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Validación del ID
        var idInput = document.getElementsByName('ID')[0];
        var id = idInput.value.trim();

        // Validación de ID (no permitir espacios)
        if (id.includes(' ')) {
            document.getElementById('errorID').textContent = 'El ID no puede contener espacios.';
            return;
        }

        // Validación del correo electrónico
        var correoInput = document.getElementsByName('correo')[0];
        var correo = correoInput.value.trim();

        // Validación de formato de correo
        if (!/^\S+@\S+\.\S+$/.test(correo)) {
            document.getElementById('errorCorreo').textContent = 'Por favor, introduce un correo electrónico válido.';
            return;
        }

        // Validación de espacios en el correo
        if (correo.includes(' ')) {
            document.getElementById('errorCorreo').textContent = 'El correo electrónico no puede contener espacios.';
            return;
        }
        alert('Formulario enviado correctamente.');

        // Limpiar errores
        document.getElementById('errorID').textContent = '';
        document.getElementById('errorCorreo').textContent = '';

        // Limpiar campos de entrada
        idInput.value = '';
        correoInput.value = '';
    });
});
