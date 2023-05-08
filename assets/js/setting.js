const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const biografia = document.querySelector('#biografia').value;
  const fotoPerfil = document.querySelector('#foto-perfil').files[0];
  const fotoBanner = document.querySelector('#foto-banner').files[0];

  // Validar entradas de usuario
  if (nombre.trim() === '') {
    alert('Por favor, introduce un nombre válido.');
    return;
  }
  if (biografia.trim() === '') {
    alert('Por favor, introduce una biografía válida.');
    return;
  }
  if (!fotoPerfil || !fotoBanner) {
    alert('Por favor, selecciona ambas fotos.');
    return;
  }

  // Almacenar datos en una base de datos
  // Este código depende del tipo de base de datos que estés utilizando

  // Actualizar la interfaz de usuario con los cambios realizados
  actualizarInterfazUsuario(nombre, biografia, fotoPerfil, fotoBanner);
});

function actualizarInterfazUsuario(nombre, biografia, fotoPerfil, fotoBanner) {
  // Actualizar el nombre
  const nombreElemento = document.querySelector('.nombre');
  nombreElemento.textContent = nombre;

  // Actualizar la biografía
  const biografiaElemento = document.querySelector('.biografia');
  biografiaElemento.textContent = biografia;

  // Actualizar la foto de perfil
  const fotoPerfilElemento = document.querySelector('.foto-perfil');
  const fotoPerfilURL = URL.createObjectURL(fotoPerfil);
  fotoPerfilElemento.setAttribute('src', fotoPerfilURL);

  // Actualizar la foto de banner
  const fotoBannerElemento = document.querySelector('.foto-banner');
  const fotoBannerURL = URL.createObjectURL(fotoBanner);
  fotoBannerElemento.setAttribute('src', fotoBannerURL);
}