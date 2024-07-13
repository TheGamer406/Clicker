const form = document.getElementById('divRegistroForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    

    console.log('Datos del formulario:');
    console.log('Nombre de usuario:', username);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    
});
