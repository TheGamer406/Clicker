// Función para copiar el número de teléfono al portapapeles
document.getElementById('telefono').addEventListener('click', function() {
    var telefono = this.textContent;
    navigator.clipboard.writeText(telefono).then(function() {
        alert('Número telefónico copiado al portapapeles.');
    }).catch(function(err) {
        alert('Error al copiar el número telefónico: ' + err);
    });
});

// Función para copiar el número de WhatsApp al portapapeles
document.getElementById('whatsapp').addEventListener('click', function() {
    var whatsapp = this.textContent;
    navigator.clipboard.writeText(whatsapp).then(function() {
        alert('Número de WhatsApp copiado al portapapeles.');
    }).catch(function(err) {
        alert('Error al copiar el número de WhatsApp: ' + err);
    });
});

// Funciones para mostrar y cerrar el modal de FAQ
function showFaq(faqId) {
    var faqText = {
        faq1: "Para editar tu equipo pokemon, vamos a seguir los siguientes pasos, primero nos situaremos en la pagina principal, seguido de eso entraremos a la opcion de duelos que se hara visible en la parte superior de tu pantalla, seguidamente aparecera una opcion de 'Editar el equipo Pokemon' donde ya una vez estes ahi podras iniciar con la edicion de tu equipo",
        faq2: "Para restablecer tu contraseña, vamos a realizar los siguientes pasos, primero nos situaremos en la pagina principal, seguido de eso entraremos a la opcion de 'Modificaciones' que se hara visible en la parte superior de tu pantalla, una vez ahi podras ver la opcion de 'Restablecer contraseña', una vez entres ahi estaras en la pestaña donde podras cambiar tu contraseña",
        faq3: "Para editar tu perfil, vamos a realizar los siguientes pasos, primero nos situaremos en la pagina principal, seguido de eso entraremos a la opcion de 'Modificaciones' que se hara visible en la parte superior de tu pantalla, una vez ahi podras ver la opcion de 'Editar perfil', una vez entres ahi estaras en la pestaña donde podras editar tu perfil con opciones como cambiar tu foto de perfil, cambiar tu ID de jugador o tu correo electronico",
        faq4: "Para iniciar un duelo pokemon, vamos a seguir los siguientes pasos, primero nos situaremos en la pagina principal, seguido de eso entraremos a la opcion de duelos que se hara visible en la parte superior de tu pantalla, seguidamente podremos observar dos opciones, una de ellas dice 'Iniciar Batalla' donde una vez le das click ahi podras iniciar una emocionante batalla pokemon contra tus amigos",
    };
    document.getElementById('faqText').innerText = faqText[faqId];
    document.getElementById('faqModal').style.display = "block";
}

function closeFaq() {
    document.getElementById('faqModal').style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById('faqModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}