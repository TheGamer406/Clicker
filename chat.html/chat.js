document.getElementById('buscar').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const amigos = document.querySelectorAll('.amigo');
    amigos.forEach(amigo => {
        const nombre = amigo.getAttribute('data-nombre').toLowerCase();
        if (nombre.includes(filter)) {
            amigo.style.display = '';
        } else {
            amigo.style.display = 'none';
        }
    });
});
