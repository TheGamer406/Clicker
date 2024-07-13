function actualizarContraseña() {
    const inputs = document.getElementById('inputs').value;

    if (inputs.length < 6) {
        alert('La contraseña nueva debe tener al menos 6 caracteres.');
    } else {
        alert('Contraseña actualizada exitosamente.');
    }
}
