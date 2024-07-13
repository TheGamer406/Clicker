function validateForm(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('txtNombreFormCotizarLanding').value;
    const apellido = document.getElementById('txtApellidoFormCotizarLanding').value;
    const correo = document.getElementById('txtCorreoFormCotizarLanding').value;
    const telefono = document.getElementById('txtNumeroTelFormCotizarLandign').value;
    const empresa = document.getElementById('txtNombreEmpresaFormCotizarLanding').value;
    const puesto = document.getElementById('txtPuestoFormCotizarLanding').value;
    const descripcion = document.getElementById('txtDescripcionFormCotizarLanding').value;
    const mensaje = document.getElementById('pMensajeFormCotizarLanding');

    // Regular expressions
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!nombre || !apellido || !correo || !telefono || !empresa || !puesto || !descripcion) {
        mensaje.textContent = 'Por favor, complete todos los campos.';
        mensaje.classList.add("pMensajeFormCotizarLandingInvalido");
        return;
    }

    if (!correoRegex.test(correo)) {
        mensaje.textContent = 'Por favor, ingrese un correo electrónico válido.';
        mensaje.classList.add("pMensajeFormCotizarLandingInvalido");
        return;
    }
    alert("Informacion enviada nos contactaremos contigo");
    mensaje.classList.add("pMensajeFormCotizarLandingValido");
    mensaje.textContent="Enviado";
}